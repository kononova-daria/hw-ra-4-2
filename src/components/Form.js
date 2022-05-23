import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Form({onAddWalk}) {
  const [form, setForm] = useState({date: '', distance: ''});

  const handlerForm = (event) => {
    setForm((prev) => ({...prev, [event.target.name]: event.target.value}));
  }
    
  const handlerClickBtnForm = () => {
      if (!form.date || !form.distance) return;
      onAddWalk(form);
      setForm({date: '', distance: ''});
  }

  return (
    <div className="form-container">
        <div>
            <label className="title-form" htmlFor="date">Дата</label>
            <input className="input-form" id="date" name="date" value={form.date} onChange={handlerForm} type="date"></input>
        </div>
        <div>
            <label className="title-form" htmlFor="distance">Пройдено, км</label>
            <input className="input-form" id="distance" name="distance" value={form.distance} onChange={handlerForm} type="text"></input>
        </div>
        <div>
            <button className="btn ok-btn" type="button" onClick={handlerClickBtnForm}>OK</button>
        </div>
    </div>
  );
}
  
export default Form;

Form.propTypes= {
    onAddWalk: PropTypes.func.isRequired,
}