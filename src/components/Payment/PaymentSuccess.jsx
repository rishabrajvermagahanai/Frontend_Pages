import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {

  const searchQuery=useSearchParams()[0];
  const refNum=searchQuery.get("reference");
  console.log(refNum); 

  return (
    <div>PaymentSuccess ReferenceNum__{refNum}</div>
  )
}

export default PaymentSuccess