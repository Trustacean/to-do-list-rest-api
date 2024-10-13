import { ErrorMessage, Field, Formik, Form } from "formik";
import ButtonComponent from "./Button";

type UpdateTodoModalProps = {
  context: string
  text: string
  initialValues: any
  onSubmit: (values: any) => void
}

function validate(values: any) {
  let errors: any = {};
  if (!values.description) {
    errors.description = 'Description is required';
  }
  if (!values.targetDate) {
    errors.targetDate = 'Target Date is required';
  }
  return errors;
}

export default function TodoForm({ context, text, initialValues, onSubmit }: UpdateTodoModalProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
      enableReinitialize={true}
      validateOnBlur={false}
      validateOnChange={false}
    >
      <Form>
        <div className='flex flex-col space-y-4 p-8'>
          <div className='flex'>
            <label htmlFor="todo">{context}</label>
          </div>
          <fieldset className='grid grid-rows-3 gap-2'>
            {/* Label Section */}
            <div className="grid grid-cols-9 content-end">
              <label htmlFor="description" className="col-span-5">Description</label>
              <label htmlFor="targetDate" className="col-span-3">Target Date</label>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-9 content-center row-span-2">
              <div className='col-span-5'>
                <Field type="text" id="description" name="description" className='border p-1 w-full' />
                <ErrorMessage name='description' component='div' className='text-red-500' />
              </div>
              <div className='col-span-3'>
                <Field type="date" id="targetDate" name="targetDate" className='border p-1 w-full' />
                <ErrorMessage name='targetDate' component='div' className='text-red-500' />
              </div>
              <div className="grid grid-rows-2">
                <ButtonComponent text={text} hoverExpand={true} type='submit' maxWidth="w-full" />
              </div>
            </div>
          </fieldset>
        </div>
      </Form>
    </Formik>
  )
}
