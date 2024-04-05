import React from 'react'
import { useState } from 'react'

const listitems = () => {
const [task, settask] = useState([
  {student: 'john', present: true },
  {student: 'doe', present: false },
  {student: 'rcrh', present: true },
  {student: 'anii', present: false },
  {student: 'anii', present: false }
]);

let attendance = task.map((attendance, index)=>(
  <li key={index} className={attendance.present === true ? 'text-green-400 mx-[10vw] ' : 'text-red-500 mx-[10vw]' } >{attendance.student}</li>
))
  return (
<>
<ul className='w-full '>
  {attendance}
</ul>


</>
  )
}

export default listitems