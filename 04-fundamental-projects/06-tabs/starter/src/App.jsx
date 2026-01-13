import { useEffect, useState } from "react";
import { JobInfo } from "./JobInfo";
import { BtnContainer } from "./BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchApi = async () => {
    try {
      const resp = await fetch(url);
      const resp2 = await resp.json();
      console.log(data);
      setData(resp2);
      setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={data}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={data} currentItem={currentItem} />
    </section>
  );
};
export default App;
