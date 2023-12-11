const Toast = ({ message, type }) => {
    return (
      <div className="flex justify-start -items-start">
          <div className="pt-1">
        {type == "Success" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1580_5305)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11 15.9142L17.4571 9.45712L16.0429 8.04291L11 13.0858L8.20712 10.2929L6.79291 11.7071L11 15.9142Z"
                fill="#00B42A"
              />
            </g>
            <defs>
              <clipPath id="clip0_1580_5305">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
  
        {type == "Error" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1580_5311)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM8.11418 9.52853L10.5891 12.0034L8.11418 14.4783L9.5284 15.8925L12.0033 13.4176L14.4781 15.8925L15.8924 14.4783L13.4175 12.0034L15.8924 9.52853L14.4781 8.11432L12.0033 10.5892L9.5284 8.11432L8.11418 9.52853Z"
                fill="#F53F3F"
              />
            </g>
            <defs>
              <clipPath id="clip0_1580_5311">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
  
        {type == "Warning" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1580_5308)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11 15V17H13V15H11ZM13 14L13 7H11L11 14H13Z"
                fill="#FF7D00"
              />
            </g>
            <defs>
              <clipPath id="clip0_1580_5308">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
  </div>
        <div className="ml-3 font-g8">
          <div style={{fontSize:'16px', fontWeight:700}}>
          {type}
          </div>
          <div style={{fontSize:'14px', fontWeight:600}}>
              {message}
          </div>
       
  
        </div>
      </div>
    );
  };
  
  export default Toast;
  