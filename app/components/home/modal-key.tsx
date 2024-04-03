'use client';

import Modal from './modal';
import { allData } from '../../lib/definitions';
import { useState } from 'react';

export default function ModalKey({
  formData,
  teacherId,
}: {
  formData: allData;
  teacherId: number;
}) {
  const [formKey, setFormKey] = useState(0);

  const updateFormKey = () => setFormKey((key) => key + 1);
  return (
    <Modal
      key={formKey}
      formData={formData}
      teacherId={teacherId}
      onReset={updateFormKey}
    />
  );
}
