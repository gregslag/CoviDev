import { database } from '../lib/firebase'
import emailjs from 'emailjs-com'
import { questions as suicideQuestions } from '../components/Suicide'
import { symptoms as generalSymptoms } from '../components/Symptoms'

class FormsService {
  static async createForm(): Promise<string> {
    const reg = await database.collection('forms').add({})
    return reg.id
  }

  static async updateForm(
    id: string,
    updated: { [key: string]: any }
  ): Promise<void> {
    await database.collection('forms').doc(id).set(updated, { merge: true })
  }

  static async finishForm(id: string, doctorName: string): Promise<void> {
    const doc = await database.collection('forms').doc(id).get()
    const data = doc.data()
    const { name, email, phone, ...rest } = data
    const allSymptomsLabels = [...suicideQuestions, ...generalSymptoms].reduce(
      (acc, curr) => ({
        ...acc,
        [curr.name]: curr.label
      }),
      {}
    )

    const selected = Object.entries(rest)
      .filter(([k, v]) => v)
      .map(([k, v]) => allSymptomsLabels[k])

    let severity = 'Leve'
    if (selected.length <= 4) severity = 'Leve'
    else if (selected.length <= 10) severity = 'Moderada'
    else severity = 'Grave'

    await emailjs.send('safiramail', 'template_bda22jo', {
      from_name: name,
      to_name: doctorName,
      message: `Os seguintes sintomas foram observados por ${name}: ${selected.join(
        ', '
      )}.`,
      phone: phone,
      severity
    })
  }
}

export default FormsService
