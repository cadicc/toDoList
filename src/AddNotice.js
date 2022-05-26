
import './App.css';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


function AddNotice() {
  const [job, setJob] = useState('')
  const [jobs,setJobs] = useState(() => {
    const localJob = JSON.parse(localStorage.getItem('jobs'))
    return localJob ?? []
  })


  const handleSubmit = () => {
    setJobs(prev => {
      const prevJob = [...prev,job]

      //Save localStorage
      const jasonJob = JSON.stringify(prevJob)
      localStorage.setItem('jobs', jasonJob)
      return prevJob
    })
    setJob('')
  }


  const trashIcon = <FontAwesomeIcon icon={faTrashCan} />
  return (
    <div className="">
      
     
      <div className='showNotice'>
        <div className='Form'>
          <form>
            <input 
                title='Thêm hành động'
                type={'text'}
                value={job}
                onChange={e => setJob(e.target.value)}
            ></input>
            <button onClick={handleSubmit}>Thêm</button>

          </form>
        </div>
        <div>
            <ul>
            {jobs.map( (jobList, index) => 
                <li key={index} >
                  {jobList}
                  <span>{trashIcon}</span>
                  </li>
            )}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default AddNotice;
