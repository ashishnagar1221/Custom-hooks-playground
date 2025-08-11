import useFrom from "../../customhooks/useForm";

const FormDemo = () => {
  const validate = (v) => {
    const errors = {};
    if (!v.name) errors.name = "Required";
    if (!v.email) errors.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(v.email)) errors.email = "Invalid email";
    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useFrom(
    { name: "", email: "" },
    validate
  );

  const onSubmit = (vals) => {
    console.log("Form submitted", vals);
    alert("Submitted: " + JSON.stringify(vals));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-3">
        useForm — Form management & validation
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-4 rounded shadow space-y-3"
      >
        <div>
          <label className="block text-sm">Name</label>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            className="mt-1 w-full border p-2 rounded"
          />
          {errors.name && (
            <div className="text-red-600 text-sm">{errors.name}</div>
          )}
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            className="mt-1 w-full border p-2 rounded"
          />
          {errors.email && (
            <div className="text-red-600 text-sm">{errors.email}</div>
          )}
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="px-3 py-1 bg-green-600 text-white rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormDemo;
