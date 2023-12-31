// NewPostForm.js
import { useState } from 'react';
import { makeHeaders } from './AuthHelper';

const APIURL = `https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-D`;

const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [onPostCreated] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(APIURL + '/posts', {
        method: 'POST',
        headers: makeHeaders(),
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        const newPost = await response.json();
        // Update state with the new post
        onPostCreated(newPost);
        // Clear form fields
        setTitle('');
        setDescription('');
      } else {
        // Handle error
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
<br /><br />
      <label>Description </label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
<br /><br />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default NewPostForm;