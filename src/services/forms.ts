import { database } from '../lib/firebase'
import emailjs from 'emailjs-com'

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

  static async finishForm(id: string): Promise<void> {
    await emailjs.send('safiramail', 'template_bda22jo', {
      from_name: 'gabriel',
      to_name: 'manuel',
      message: 'gesiel é o cara'
    })
  }
}

export default FormsService
