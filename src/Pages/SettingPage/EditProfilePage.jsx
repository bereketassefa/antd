import React from 'react'
import EditProfile from '../../Components/SettingComponent/EditProfile';

function EditProfilePage() {
  return (
    <div>
      <div className="w-full md:flex items-start justify-center mt-4 gap-2">
        <Setting />
        <EditProfile />
      </div>
    </div>
  );
}

export default EditProfilePage