import React from 'react'
import Setting from '../../Components/SettingComponent/Setting'
import General from '../../Components/SettingComponent/General'
function General() {
  return (
    <div>
      <div className="w-full md:flex items-start justify-center mt-4 gap-2">
        <Setting />
        <General />
      </div>
    </div>
  );
}

export default General