import React, { Component } from "react";
import "./footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footermain">
        <div className='c1'>
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi ab sunt eaque eveniet assumenda nostrum commodi molestias exercitationem temporibus facilis saepe pariatur dolorum recusandae autem, dolores fuga blanditiis! Ipsum.</p>
        </div>

        <div className='c2'>
          <h4>Quick Links</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi ab sunt eaque eveniet assumenda nostrum commodi molestias exercitationem temporibus facilis saepe pariatur dolorum recusandae autem, dolores fuga blanditiis! Ipsum.</p>
        </div>

        {/* <table className="c1">
          <tr>
            <th>About Us</th>
          </tr>
          <tr>
            <td>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident exercitationem soluta asperiores. Veniam autem porro
              quaerat facere sapiente pariatur a numquam repellendus saepe,
              dolorum, vitae natus, nam magnam similique quos!
            </td>
          </tr>
        </table>

        <table className="c1">
          <tr>
            <th>About Us</th>
          </tr>
          <tr>
            <td>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident exercitationem soluta asperiores. Veniam autem porro
              quaerat facere sapiente pariatur a numquam repellendus saepe,
              dolorum, vitae natus, nam magnam similique quos!
            </td>
          </tr>
        </table> */}
      </div>
    );
  }
}

export default Footer;
