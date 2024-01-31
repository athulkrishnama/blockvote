import React, { useEffect, useState } from "react";
import {getAllCandidate} from '../web3_functions'

function ListCandidates({instance, account}) {
  // state for candidates
  const [candidates, setCandidates] = useState([]);

//   function to get all candidates
const getCandidates = async ()=>{
    const res = await getAllCandidate(instance , account)
    console.log(res)
    setCandidates(res.message)
}

  useEffect(() => {
    
  getCandidates()

  }, [])
  
  return (
    <div className="col-md-6 border rounded-4 p-4 m-4 row ">
      <h3>Registerd Candidates</h3>
      {
        candidates.map((can)=>{
            return(
                <div key={can.candidateAddress} className="card col-md-4 mx-2">
                    <h3 className="cardTitle">{can.name}</h3>
                    <p className="cardBody">{can.candidateAddress}</p>
                </div>
            )
        })
      }
    </div>
  );
}

export default ListCandidates;