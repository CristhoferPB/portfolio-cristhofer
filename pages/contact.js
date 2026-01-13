import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "40px" }}>
        <h2>Contact Me</h2>
        <ul>
          <li>Email: <a href="mailto:cristhofer.pb@hotmail.com">cristhofer.pb@hotmail.com</a></li>
          <li>Phone: +55 54 99165-9210</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/cristhofer-pastorio" target="_blank">linkedin.com/in/cristhofer-pastorio</a></li>
          <li>GitHub: <a href="https://github.com/CristhoferPB" target="_blank">github.com/CristhoferPB</a></li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
