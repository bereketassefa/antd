import React from 'react'
import AchivementCard from '../AchivementCard/achivementCard'

export default function AchivementList() {
  return (
    <div className='w-full flex flex-col gap-2'>
                <AchivementCard
                    edit={true}
                    certificateName={"Addis system best seller"}
                    company={'AddisPay'}
                    date={'Jun 20 2021'}
                
                />
                <AchivementCard 
                    edit={true}
                    certificateName={"Quality Product Award"}
                    company={'BridgeTech'}
                    date={'Sep 20 2022'}
                
                />
           </div>
  )
}
