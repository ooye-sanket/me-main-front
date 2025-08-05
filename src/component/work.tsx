
import img1 from "../media/16.svg";
import img2 from "../media/17.svg";
import img3 from "../media/18.svg";
import img4 from "../media/19.svg";
import img5 from "../media/20.svg";
import img6 from "../media/AWS-UG1.jpeg";

const Work = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="work-section">
      <h2 className="work-heading">SOME BRANDS I HAVE WORKED WITH</h2>
      <div className="work-logos-container">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`brand-${idx}`} className="work-logo" />
        ))}
      </div>
    </div>
  );
};

export default Work;
