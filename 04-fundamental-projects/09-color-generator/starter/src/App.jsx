import { useState } from 'react';
import Values from 'values.js';
import { nanoid } from 'nanoid';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  const [colors, setColors] = useState(new Values('#411aeeff').all(10));
  return (
    <main>
      <Form setColors={setColors} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  );
};
export default App;

export const Form = ({ setColors }) => {
  const [color, setColor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setColors(new Values(color).all(10));
  };
  return (
    <section>
      <h4>color generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          name=''
          id=''
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#411aeeff'
        />
        <button className='btn' type='submit' style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};

export const ColorList = ({ colors, index }) => {
  return (
    <section className='colors'>
      {colors.map((color, index) => {
        return <SingleColor color={color} key={nanoid()} index={index} />;
      })}
    </section>
  );
};

export const SingleColor = ({ index, color: { hex, weight } }) => {
  async function saveToClipboard() {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('color copied to clipboard');
      } catch (error) {
        toast.error('failed to copy to clipboard');
      }
    } else {
      toast.error('clipboard access not available');
    }
  }

  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
};
