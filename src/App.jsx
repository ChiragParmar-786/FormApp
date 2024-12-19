import React,{useState} from 'react';
import './App.css'

function App() {
  
  const [formData,setFormData] = useState({
    text:'',
    checkbox:false,
    radio:'',
    select:''
})

  const handleChange = (e) => {

    const {name,value,type,checked} = e.target;
    setFormData({
      ...formData,
      [name]:type === "checkbox" ? checked : value
    }) 

  }

  return (
    <div className='form-container'>
      <h1>Form example</h1>
       <form>
        {/* Text input */}
         <div className='form-field'>
          <label>Text
          <input type='text' name='text' value={formData.text} onChange={handleChange}></input>
          </label>
         </div>

       {/* Checkbox */}
         <div className='form-field'>
          <label>
            <input type='checkbox' name='checkbox' checked={formData.checkbox} onChange={handleChange}></input>
            Checkbox
          </label>
         </div>

        {/* Radio Button */}
         <div className='form-field'>
          <label>
            <input type='radio' name='radio' value='option1' checked={formData.radio === 'option1'} onChange={handleChange}></input>
            Option 1
            </label>

            <label>
            <input type='radio' name='radio' value='option2' checked={formData.radio === 'option2'} onChange={handleChange}></input>
            Option 2
            </label> 
         </div>

           {/* Drop down */}
         <div className='form-field'>
          <label>Select</label>
          <select name='select' value={formData.select} onChange={handleChange}>
            <option value="">-- Choose an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
         </div>
       </form>

       <div className='form-data'>
        <h3>Form Data</h3>
        <p><strong>Text:</strong> {formData.text || 'N/A'}</p> 
        <p><strong>Checkbox:</strong> {formData.checkbox ? 'Checked' : 'Unchecked'}</p>
        <p><strong>Radio::</strong> {formData.radio || 'N/A'}</p>
        <p><strong>Select:</strong> {formData.select || 'N/A'}</p>
       </div>
    </div>
  );
}

export default App
