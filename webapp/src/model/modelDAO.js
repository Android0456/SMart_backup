import React, { useState, useEffect } from "react";
function App() {
  const [lectures, setLectures] = useState(false);
  useEffect(() => {
    getAllLecture();
  }, []);
  function getAllLecture() {
    fetch("http://localhost:3003")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setLectures(data);
      });
  }

  function createLecture() {}
  function deleteLecture() {}
  return (
    <div>
      {lectures ? lectures : "There is no lecture available"}
      <br />
      <button onClick={createLecture}>Add Lecture</button>
      <br />
      <button onClick={deleteLecture}>Delete lecture</button>
    </div>
  );
}
export default App;
