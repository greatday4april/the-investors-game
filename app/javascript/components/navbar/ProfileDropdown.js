import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import React, { useState } from 'react';

// import Avatar from '../common/Avatar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
// import team3 from '../../../assets/images/team/3.jpg';

const ProfileDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <Dropdown
      nav
      inNavbar
      isOpen={dropdownOpen}
      toggle={toggle}
      onMouseOver={() => {
        let windowWidth = window.innerWidth;
        windowWidth > 992 && setDropdownOpen(true);
      }}
      onMouseLeave={() => {
        let windowWidth = window.innerWidth;
        windowWidth > 992 && setDropdownOpen(false);
      }}
    >
      <DropdownToggle nav className="pr-0">
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.9023 46.438C40.2142 46.438 49.3842 44.1655 49.3842 41.3622C49.3842 38.5588 40.2142 36.2863 28.9023 36.2863C17.5905 36.2863 8.42041 38.5588 8.42041 41.3622C8.42041 44.1655 17.5905 46.438 28.9023 46.438Z" fill="#B8CBCD" />
          <path d="M48.8113 29.7253H7.99099C7.99099 29.7253 6.80935 36.3855 7.99099 38.6392C9.03943 40.6394 17.3749 43.2966 28.4226 43.2966C39.4699 43.2966 48.0267 40.5986 48.8113 38.6392C49.6707 36.4929 48.8113 29.7253 48.8113 29.7253Z" fill="#F7BB83" />
          <path d="M28.4225 44.5857C18.0726 44.5857 8.39478 42.1867 6.84877 39.2378C5.52963 36.7219 6.51103 30.6848 6.72115 29.5002C6.83029 28.8849 7.36568 28.4363 7.99045 28.4363H48.8108C49.46 28.4363 50.0079 28.9188 50.0895 29.5629C50.2403 30.7484 50.9437 36.7804 50.0074 39.1183C48.8211 42.0819 38.9361 44.5857 28.4225 44.5857ZM9.09174 31.0144C8.73123 33.5698 8.5456 36.9222 9.13213 38.0411C9.78053 39.227 17.1256 42.0075 28.4225 42.0075C39.5837 42.0075 46.942 39.2936 47.6257 38.1352C48.0562 37.0562 47.9243 33.6437 47.6596 31.0144H9.09174Z" fill="#6E4123" />
          <path d="M5.70007 31.79C5.09593 34.1452 6.23331 36.8174 8.58843 37.4207C10.944 38.0248 13.248 36.2352 13.8517 33.8805L5.70007 31.79Z" fill="#B2EDA6" />
          <path d="M9.52156 38.3986C9.52113 38.3986 9.52156 38.3986 9.52156 38.3986C9.13656 38.3986 8.7507 38.3501 8.37515 38.2534C7.01648 37.9049 5.91089 36.9759 5.26164 35.6375C4.66523 34.4073 4.52171 32.9266 4.86761 31.5765C4.98578 31.1167 5.45328 30.8383 5.9139 30.9577L14.0655 33.0482C14.5253 33.1659 14.8024 33.6343 14.6843 34.0945C14.0449 36.5884 11.8732 38.3986 9.52156 38.3986ZM6.4046 32.8578C6.37109 33.5612 6.50859 34.2698 6.80765 34.8877C7.23261 35.7638 7.94074 36.3675 8.8014 36.5884C9.03773 36.6494 9.28007 36.6799 9.52113 36.6799C10.8192 36.6799 12.0821 35.7762 12.7193 34.4773L6.4046 32.8578Z" fill="#3C663E" />
          <path d="M14.4717 34.0553C14.3453 36.4835 15.988 38.8781 18.4166 39.004C20.8443 39.1308 22.7492 36.9209 22.8755 34.4927L14.4717 34.0553Z" fill="#B2EDA6" />
          <path d="M18.6153 39.8681C18.5345 39.8681 18.4528 39.866 18.3712 39.8617C16.9704 39.7891 15.7028 39.0973 14.8018 37.9131C13.9738 36.8255 13.5402 35.4028 13.6128 34.0107C13.6244 33.7829 13.7263 33.5694 13.8956 33.4168C14.0649 33.2643 14.2879 33.1844 14.5156 33.1968L22.9199 33.6342C23.3938 33.6592 23.7582 34.0631 23.7333 34.537C23.5807 37.4769 21.2849 39.8681 18.6153 39.8681ZM15.3728 34.9628C15.479 35.6589 15.754 36.3267 16.1695 36.8724C16.759 37.6475 17.5728 38.0991 18.4606 38.1455C20.0543 38.231 21.4525 36.9875 21.8865 35.3014L15.3728 34.9628Z" fill="#3C663E" />
          <path d="M23.958 34.7755C23.958 37.2071 25.7232 39.5128 28.1548 39.5128C30.5859 39.5128 32.3734 37.2071 32.3734 34.7755H23.958Z" fill="#B2EDA6" />
          <path d="M28.1548 40.3726C25.367 40.3726 23.0986 37.8619 23.0986 34.7759C23.0986 34.3015 23.4836 33.9165 23.958 33.9165H32.3734C32.8478 33.9165 33.2328 34.3015 33.2328 34.7759C33.2328 37.8619 30.955 40.3726 28.1548 40.3726ZM24.9085 35.6348C25.2419 37.2139 26.4631 38.6534 28.1548 38.6534C29.8576 38.6534 31.0865 37.2135 31.4221 35.6348H24.9085Z" fill="#3C663E" />
          <path d="M50.4411 31.79C51.0452 34.1452 49.9079 36.8174 47.5527 37.4207C45.1976 38.0248 42.8932 36.2352 42.2891 33.8805L50.4411 31.79Z" fill="#B2EDA6" />
          <path d="M46.6204 38.3986C44.2683 38.3986 42.0971 36.5883 41.4573 34.094C41.3395 33.6342 41.6167 33.1659 42.076 33.0477L50.2276 30.9573C50.6887 30.8395 51.1557 31.1163 51.2739 31.576C51.6202 32.9265 51.4767 34.4068 50.8799 35.637C50.231 36.9755 49.125 37.9045 47.7664 38.253C47.3908 38.3501 47.0049 38.3986 46.6204 38.3986ZM43.4218 34.4773C44.1772 36.0169 45.8285 36.9763 47.3397 36.5883C48.2008 36.3675 48.9089 35.7638 49.3339 34.8876C49.6333 34.2697 49.7708 33.5612 49.7369 32.8578L43.4218 34.4773Z" fill="#3C663E" />
          <path d="M41.6699 34.0553C41.7963 36.4835 40.1536 38.8781 37.725 39.004C35.2972 39.1308 33.392 36.9209 33.2661 34.4927L41.6699 34.0553Z" fill="#B2EDA6" />
          <path d="M37.5264 39.8682C34.8567 39.8682 32.5605 37.4769 32.4079 34.537C32.383 34.0631 32.7474 33.6592 33.2213 33.6343L41.6256 33.1968C41.8533 33.1844 42.0763 33.2639 42.2456 33.4168C42.4149 33.5689 42.5168 33.7829 42.5284 34.0107C42.601 35.4028 42.1674 36.8255 41.3394 37.9131C40.4384 39.0973 39.1704 39.7891 37.7696 39.8617C37.6884 39.866 37.6067 39.8682 37.5264 39.8682ZM34.2547 35.3014C34.6887 36.9871 36.0972 38.2289 37.6802 38.1455C38.5684 38.0996 39.3822 37.6475 39.9717 36.8724C40.3872 36.3262 40.6622 35.6589 40.7684 34.9628L34.2547 35.3014Z" fill="#3C663E" />
          <path d="M5.70001 31.79C5.22005 33.6618 5.83966 36.2201 7.2963 37.2952L5.70001 31.79Z" fill="#B2EDA6" />
          <path d="M7.29518 38.5842C7.0292 38.5842 6.76107 38.5026 6.53076 38.3324C4.50994 36.8405 3.88689 33.6716 4.4515 31.4699C4.62811 30.7802 5.32936 30.3656 6.02029 30.5413C6.70994 30.7184 7.12545 31.4209 6.94885 32.1101C6.5733 33.5736 7.10397 35.5506 8.06217 36.2574C8.63494 36.6803 8.75654 37.4872 8.33373 38.06C8.08065 38.4029 7.69049 38.5842 7.29518 38.5842Z" fill="#3C663E" />
          <path d="M50.4408 31.79C50.9693 33.8508 50.6311 36.3409 48.9609 37.3347L50.4408 31.79Z" fill="#B2EDA6" />
          <path d="M48.9624 38.6237C48.5228 38.6237 48.0944 38.399 47.8533 37.9938C47.4894 37.3819 47.6901 36.5909 48.3019 36.2269C49.3989 35.5742 49.5794 33.6187 49.1927 32.1101C49.0156 31.4209 49.4316 30.7183 50.1212 30.5413C50.8113 30.366 51.5134 30.7802 51.69 31.4699C52.3259 33.9496 51.9328 37.0665 49.6206 38.4428C49.4135 38.5657 49.1862 38.6237 48.9624 38.6237Z" fill="#3C663E" />
          <path d="M48.945 24.7921H7.34613C5.34078 24.7921 3.19234 28.9102 5.86414 31.5464C7.88968 33.5448 19.655 34.9156 28.1456 34.9156C36.6362 34.9156 48.4015 33.5453 50.427 31.5464C53.0984 28.9102 50.95 24.7921 48.945 24.7921Z" fill="#FFBAB0" />
          <path d="M28.146 35.7749C20.0885 35.7749 7.65249 34.5181 5.26085 32.1582C3.48065 30.4017 3.52792 28.1149 4.16557 26.5607C4.81053 24.9889 6.08885 23.9327 7.34612 23.9327H48.945C50.2027 23.9327 51.4806 24.9889 52.1256 26.5607C52.7632 28.1149 52.8105 30.4013 51.0307 32.1578C48.6395 34.5181 36.2039 35.7749 28.146 35.7749ZM7.34655 25.6515C6.88592 25.6515 6.17221 26.1989 5.75585 27.2134C5.54917 27.7174 4.98928 29.4757 6.46827 30.9345C8.06456 32.5097 18.8024 34.0562 28.1464 34.0562C37.4904 34.0562 48.2279 32.5097 49.8242 30.9345C51.3027 29.4753 50.7433 27.7174 50.5366 27.2134C50.1202 26.1993 49.4065 25.6515 48.9459 25.6515H7.34655Z" fill="#6E4123" />
          <path d="M15.8325 26.0812L34.7388 36.8148L47.6294 25.7589H35.5981L15.8325 26.0812Z" fill="#F6E89A" />
          <path d="M34.7384 37.6741C34.5931 37.6741 34.4466 37.6372 34.3143 37.562L15.408 26.8284C15.0712 26.6372 14.9036 26.244 14.9994 25.8685C15.0952 25.4934 15.4304 25.2282 15.8179 25.2218L35.5836 24.8995H47.629C47.9887 24.8995 48.3101 25.1234 48.4347 25.4607C48.5597 25.798 48.4613 26.1774 48.1885 26.4116L35.2978 37.4675C35.1384 37.6041 34.9395 37.6741 34.7384 37.6741ZM18.9963 26.889L34.6378 35.7693L45.3074 26.6183H35.5982L18.9963 26.889Z" fill="#8D4520" />
          <path d="M28.1108 8.98303C8.19566 8.98303 7.55371 23.0196 7.55371 24.1892C7.55371 26.0812 16.6841 28.8703 28.1147 28.8703C39.5452 28.8703 48.8114 26.5792 48.8114 24.6653C48.811 22.9659 46.9848 8.98303 28.1108 8.98303Z" fill="#F7BB83" />
          <path d="M28.1143 30.1589C22.7982 30.1589 17.5134 29.5659 13.2329 28.4891C6.26465 26.736 6.26465 24.8192 6.26465 24.1892C6.26465 23.5159 6.51301 7.69397 28.1108 7.69397C38.5226 7.69397 43.8932 11.8886 46.5655 15.4073C49.4654 19.2259 50.1005 23.3844 50.1005 24.6649C50.1001 28.6674 36.6148 30.1589 28.1143 30.1589ZM8.84707 24.0006C9.89336 25.1388 17.2621 27.5808 28.1143 27.5808C38.8599 27.5808 46.3433 25.5801 47.5095 24.4651C47.4416 23.6251 47.0184 20.2671 44.5116 16.9662C41.1385 12.5245 35.6205 10.2721 28.1104 10.2721C10.0511 10.2721 8.91625 22.2703 8.84707 24.0006Z" fill="#6E4123" />
          <path d="M18.9321 17.4123C19.4799 17.4123 19.9239 16.9683 19.9239 16.4206C19.9239 15.8728 19.4799 15.4288 18.9321 15.4288C18.3844 15.4288 17.9404 15.8728 17.9404 16.4206C17.9404 16.9683 18.3844 17.4123 18.9321 17.4123Z" fill="#6E4123" />
          <path d="M26.8648 15.4284C27.4125 15.4284 27.8565 14.9844 27.8565 14.4367C27.8565 13.889 27.4125 13.4449 26.8648 13.4449C26.3171 13.4449 25.873 13.889 25.873 14.4367C25.873 14.9844 26.3171 15.4284 26.8648 15.4284Z" fill="#6E4123" />
          <path d="M24.1865 21.5119C24.7343 21.5119 25.1783 21.0679 25.1783 20.5202C25.1783 19.9724 24.7343 19.5284 24.1865 19.5284C23.6388 19.5284 23.1948 19.9724 23.1948 20.5202C23.1948 21.0679 23.6388 21.5119 24.1865 21.5119Z" fill="#6E4123" />
          <path d="M34.3023 16.4206C34.85 16.4206 35.294 15.9766 35.294 15.4289C35.294 14.8811 34.85 14.4371 34.3023 14.4371C33.7546 14.4371 33.3105 14.8811 33.3105 15.4289C33.3105 15.9766 33.7546 16.4206 34.3023 16.4206Z" fill="#6E4123" />
          <path d="M30.0371 21.5119C30.5848 21.5119 31.0288 21.0679 31.0288 20.5202C31.0288 19.9724 30.5848 19.5284 30.0371 19.5284C29.4894 19.5284 29.0454 19.9724 29.0454 20.5202C29.0454 21.0679 29.4894 21.5119 30.0371 21.5119Z" fill="#6E4123" />
          <path d="M37.771 22.3713C38.3187 22.3713 38.7627 21.9272 38.7627 21.3795C38.7627 20.8318 38.3187 20.3878 37.771 20.3878C37.2233 20.3878 36.7793 20.8318 36.7793 21.3795C36.7793 21.9272 37.2233 22.3713 37.771 22.3713Z" fill="#6E4123" />
          <path d="M41.5064 19.6608C42.0541 19.6608 42.4981 19.2168 42.4981 18.6691C42.4981 18.1214 42.0541 17.6774 41.5064 17.6774C40.9587 17.6774 40.5146 18.1214 40.5146 18.6691C40.5146 19.2168 40.9587 19.6608 41.5064 19.6608Z" fill="#6E4123" />
          <path d="M13.9737 22.37C14.5214 22.37 14.9654 21.926 14.9654 21.3783C14.9654 20.8306 14.5214 20.3866 13.9737 20.3866C13.4259 20.3866 12.9819 20.8306 12.9819 21.3783C12.9819 21.926 13.4259 22.37 13.9737 22.37Z" fill="#6E4123" />
          <path d="M50.4271 33.4439C50.0946 33.4439 49.762 33.3158 49.5097 33.0602C49.0096 32.5531 49.0152 31.7372 49.5218 31.237C50.6037 30.1701 50.5208 28.6077 50.0825 27.5022C49.6906 26.5139 49.1101 26.085 48.9451 26.0812C48.2396 26.0644 47.6634 25.4826 47.672 24.7771C47.6806 24.0707 48.2396 23.5031 48.9456 23.5031C50.3541 23.5031 51.6964 24.6417 52.4488 26.4756C53.2248 28.3667 53.3391 31.0926 51.3329 33.0726C51.0815 33.3201 50.7541 33.4439 50.4271 33.4439Z" fill="#6E4123" />
          <path d="M5.86415 33.3223C5.53716 33.3223 5.21017 33.1985 4.9588 32.951C2.96806 30.9865 3.06903 28.3113 3.82743 26.4627C4.56521 24.6649 5.94622 23.5031 7.34614 23.5031C8.05814 23.5031 8.63521 24.0801 8.63521 24.7921C8.63521 25.5041 8.05814 26.0812 7.34614 26.0812C7.18243 26.0812 6.6045 26.4855 6.21263 27.4416C5.77177 28.5166 5.68626 30.0463 6.7695 31.1154C7.27653 31.6156 7.28169 32.4315 6.78153 32.9386C6.52931 33.1942 6.19673 33.3223 5.86415 33.3223Z" fill="#6E4123" />
        </svg>

      </DropdownToggle>
      {/* <DropdownMenu right className="dropdown-menu-card">
        <div className="bg-white rounded-soft py-2">
          <DropdownItem className="font-weight-bold text-warning" href="#!">
            <FontAwesomeIcon icon="crown" className="mr-1" />
            <span>Go Pro</span>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="#!">Set status</DropdownItem>
          <DropdownItem tag={Link} to="/pages/profile">
            Profile &amp; account
          </DropdownItem>
          <DropdownItem href="#!">Feedback</DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/pages/settings">
            Settings
          </DropdownItem>
          <DropdownItem tag={Link} to="/authentication/basic/logout">
            Logout
          </DropdownItem>
        </div>
      </DropdownMenu> */}
    </Dropdown>
  );
};

export default ProfileDropdown;
