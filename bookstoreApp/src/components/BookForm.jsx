import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeName,
  changeCost,
  changeDescription,
} from '../store/slices/formSlice';
import { addBook } from '../store/slices/bookSlice';

function BookForm() {
  const dispatch = useDispatch();
  const { name, description, cost } = useSelector((state) => ({
    name: state.form.name,
    description: state.form.description,
    cost: state.form.cost,
  }));

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook({ name, description, cost }));
  };

  return (
    <div className="bookForm">
      <h4 className="subtitle is-3">Kitap Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">İsmi</label>
            <input
              className="input"
              onChange={(event) => dispatch(changeName(event.target.value))}
              value={name}
            />
          </div>
          <div className="field">
            <label className="label">Yazarı</label>
            <input
              className="input"
              onChange={(event) => dispatch(changeDescription(event.target.value))}
              value={description}
            />
          </div>
          <div className="field">
            <label className="label">Fiyatı</label>
            <input
              className="input"
              type="number"
              onChange={(event) => dispatch(changeCost(parseInt(event.target.value) || 0))}
              value={cost}
            />
          </div>
        </div>
        <div className="field is-grouped is-grouped-right">
          <button className="button is-primary">Kaydet</button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;