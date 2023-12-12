import React from 'react';
import CustomButton from './CustomButton';

// FilePicker component allows the user to select a file and read it
const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col'>
        {/* File input to allow the user to select a file */}
        <input
          id='file-upload'
          type='file'
          accept='image/*'
          onChange={(e) => setFile(e.target.files[0])} // Set the selected file
        />
        {/* Label for the file input */}
        <label htmlFor='file-upload' className='filepicker-label'>
          Upload File
        </label>

        {/* Display the name of the selected file or a default message */}
        <p className='mt-2 text-gray-500 text-xs truncate'>
          {file === '' ? 'No file selected' : file.name}
        </p>
      </div>

      <div className='mt-4 flex flex-wrap gap-3'>
        {/* CustomButton to read the logo file */}
        <CustomButton
          type='outline'
          title='Logo'
          handleClick={() => readFile('logo')} // Read the logo file
          customStyles='text-xs'
        />
        {/* CustomButton to read the full file */}
        <CustomButton
          type='filled'
          title='Full'
          handleClick={() => readFile('full')} // Read the full file
          customStyles='text-xs'
        />
      </div>
    </div>
  );
};

export default FilePicker;
