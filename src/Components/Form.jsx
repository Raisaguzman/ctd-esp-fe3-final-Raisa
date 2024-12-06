import { useState } from "react";
import "../index.css";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (formData.name.length < 6) {
      formErrors.name = "Por favor verifique su información nuevamente";
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      formErrors.email = "Por favor verifique su información nuevamente";
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log(formData);
      alert(`Gracias ${formData.name}, te contactaremos cuando antes vía mail`);
      setSubmitted(true);
      setFormData({ name: "", email: "" });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre completo:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}          
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button type="submit">Enviar</button>
      {submitted && <p>Formulario enviado con éxito</p>}
    </form>
  );
};

export default Form;
