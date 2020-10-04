import { database } from '../lib/firebase'

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
}

export default FormsService
