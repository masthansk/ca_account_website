import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, serverTimestamp } from '@angular/fire/firestore';

export interface ContactEnquiry {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class FirebaseContactService {
  private readonly firestore = inject(Firestore);

  async saveEnquiry(payload: ContactEnquiry): Promise<void> {
    await addDoc(collection(this.firestore, 'contact_enquiries'), {
      ...payload,
      createdAt: serverTimestamp()
    });
  }
}
