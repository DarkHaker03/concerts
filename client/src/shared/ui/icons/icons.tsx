import CSS from 'csstype';
import styles from './styles.module.scss';

type Props = {
  icon: JSX.Element;
  text: string;
  width?: string;
  height?: string;
  inlineStyles?: CSS.Properties;
  stroke?: string;
  fill?: string;
};

const Logo = ({
  width = '307',
  height = '42',
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 307 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={inlineStyles}
  >
    <path
      d="M117.861 0H82.9467H82.541H73.5545L59.7256 33.6547L45.8967 0H38.6131H36.5045H11.6006L0 12.3048V41.9026H35.3205C37.1364 41.9026 38.6131 40.3363 38.6131 38.4101C38.6131 36.484 37.1364 34.9177 35.3205 34.9177H8.86672V22.5353H32.7064C34.5223 22.5353 35.999 20.9689 35.999 19.0428C35.999 17.1166 34.5223 15.5503 32.7064 15.5503H8.86672V6.97788H38.6131V5.11524L53.7258 41.8956H65.7254L82.541 0.973641V41.8956H112.78L119.365 34.9106H91.4077V22.5282H115.247C117.063 22.5282 118.54 20.9619 118.54 19.0357C118.54 17.1096 117.063 15.5433 115.247 15.5433H91.4077V6.97082H117.861C119.677 6.97082 121.154 5.40451 121.154 3.47836C121.154 1.55926 119.677 0 117.861 0Z"
      fill="white"
    />
    <path
      d="M209.163 0H169.685H168.102H160.812V29.8448L138.375 0H128.464V37.2037C128.464 39.8001 130.447 41.9097 132.901 41.9097C135.349 41.9097 137.338 39.8001 137.338 37.2037V12.0649L159.774 41.9097H169.685V6.98494H185.842V40.7879L194.715 33.2244V6.98494H209.163C210.979 6.98494 212.455 5.41861 212.455 3.49246C212.455 1.55925 210.979 0 209.163 0Z"
      fill="white"
    />
    <path
      d="M293.985 0H283.569L276.983 6.98494C277.083 6.98494 277.19 6.98494 277.289 6.98494H294.511C296.074 6.98494 297.644 6.98494 297.644 9.20742V32.7022C297.644 34.9247 296.081 34.9247 294.511 34.9247H277.289C275.726 34.9247 274.157 34.9247 274.157 32.7022V9.98353L265.29 19.3885V33.3302C265.29 41.9026 271.549 41.9026 277.815 41.9026H293.992C300.251 41.9026 306.517 41.9026 306.517 33.3302V8.56537C306.51 -1.14387e-05 300.244 0 293.985 0Z"
      fill="white"
    />
    <path
      d="M242.967 0H232.55L225.965 6.98494C226.065 6.98494 226.171 6.98494 226.271 6.98494H243.492C245.055 6.98494 246.625 6.98494 246.625 9.20742V32.7022C246.625 34.9247 245.062 34.9247 243.492 34.9247H226.271C224.708 34.9247 223.138 34.9247 223.138 32.7022V9.98353L214.271 19.3885V33.3302C214.271 41.9026 220.531 41.9026 226.796 41.9026H242.973C249.233 41.9026 255.498 41.9026 255.498 33.3302V8.56537C255.492 -1.14387e-05 249.233 0 242.967 0Z"
      fill="white"
    />
  </svg>
);

const Home = ({
  width = '24',
  height = '24',
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={inlineStyles}
  >
    <path
      d="M17 17.9963V24H21C22.6568 24 24 22.656 24 20.9981V11.8715C24.0002 11.3516 23.7983 10.8521 23.437 10.4786L14.939 1.28584C13.4396 -0.337513 10.9089 -0.437185 9.28655 1.06319C9.20949 1.13448 9.13523 1.20873 9.06403 1.28584L0.581016 10.4756C0.208734 10.8506 -0.000140554 11.3579 7.09607e-08 11.8865V20.9981C7.09607e-08 22.656 1.34316 24 3 24H6.99998V17.9963C7.01869 15.2677 9.22027 13.0396 11.8784 12.9754C14.6255 12.9091 16.9791 15.1752 17 17.9963Z"
      fill="white"
    />
    <path
      d="M12 14.9937C10.3432 14.9937 9 16.3376 9 17.9955V23.9993H15V17.9955C15 16.3376 13.6568 14.9937 12 14.9937Z"
      fill="white"
    />
  </svg>
);

const Ticket = ({
  width = '18',
  height = '24',
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={inlineStyles}
  >
    <path
      d="M3 24H5.13C5.57754 23.9957 6.01099 23.843 6.36231 23.5657C6.71362 23.2884 6.9629 22.9023 7.071 22.468C7.18677 22.0452 7.43827 21.6721 7.78681 21.4061C8.13534 21.1402 8.5616 20.9962 9 20.9962C9.4384 20.9962 9.86466 21.1402 10.2132 21.4061C10.5617 21.6721 10.8132 22.0452 10.929 22.468C11.0371 22.9023 11.2864 23.2884 11.6377 23.5657C11.989 23.843 12.4225 23.9957 12.87 24H15C15.7956 24 16.5587 23.6839 17.1213 23.1213C17.6839 22.5587 18 21.7956 18 21V17H14C13.7348 17 13.4804 16.8946 13.2929 16.7071C13.1054 16.5196 13 16.2652 13 16C13 15.7348 13.1054 15.4804 13.2929 15.2929C13.4804 15.1054 13.7348 15 14 15H18V5C17.9984 3.67441 17.4711 2.40356 16.5338 1.46622C15.5964 0.528882 14.3256 0.00158786 13 0L12.87 0C12.4225 0.00425181 11.989 0.157013 11.6377 0.434299C11.2864 0.711585 11.0371 1.09769 10.929 1.532C10.8132 1.95484 10.5617 2.32792 10.2132 2.59385C9.86466 2.85979 9.4384 3.00383 9 3.00383C8.5616 3.00383 8.13534 2.85979 7.78681 2.59385C7.43827 2.32792 7.18677 1.95484 7.071 1.532C6.9629 1.09769 6.71362 0.711585 6.36231 0.434299C6.01099 0.157013 5.57754 0.00425181 5.13 0L5 0C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5V15H4C4.26522 15 4.51957 15.1054 4.70711 15.2929C4.89464 15.4804 5 15.7348 5 16C5 16.2652 4.89464 16.5196 4.70711 16.7071C4.51957 16.8946 4.26522 17 4 17H0V21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24ZM8 15H10C10.2652 15 10.5196 15.1054 10.7071 15.2929C10.8946 15.4804 11 15.7348 11 16C11 16.2652 10.8946 16.5196 10.7071 16.7071C10.5196 16.8946 10.2652 17 10 17H8C7.73478 17 7.48043 16.8946 7.29289 16.7071C7.10536 16.5196 7 16.2652 7 16C7 15.7348 7.10536 15.4804 7.29289 15.2929C7.48043 15.1054 7.73478 15 8 15Z"
      fill="#6D6D6D"
    />
  </svg>
);

const Love = ({
  width = '20',
  height = '18',
  inlineStyles,
  fill = '#6D6D6D',
  stroke,
}: Pick<Props, 'width' | 'height' | 'inlineStyles' | 'stroke' | 'fill'>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={inlineStyles}
  >
    <path
      d="M14.44 0.100098C12.63 0.100098 11.01 0.980098 10 2.3301C8.99 0.980098 7.37 0.100098 5.56 0.100098C2.49 0.100098 0 2.6001 0 5.6901C0 6.8801 0.19 7.9801 0.52 9.0001C2.1 14.0001 6.97 16.9901 9.38 17.8101C9.72 17.9301 10.28 17.9301 10.62 17.8101C13.03 16.9901 17.9 14.0001 19.48 9.0001C19.81 7.9801 20 6.8801 20 5.6901C20 2.6001 17.51 0.100098 14.44 0.100098Z"
      fill={fill}
      stroke={stroke}
      strokeWidth="1.20833"
    />
  </svg>
);

const Settings = ({
  width = '24',
  height = '24',
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={inlineStyles}
  >
    <path
      d="M14.1075 1.575C13.488 -0.525 10.512 -0.525 9.8925 1.575L9.7425 2.085C9.64994 2.39939 9.48818 2.68908 9.26909 2.93282C9.05 3.17656 8.77913 3.36817 8.47634 3.4936C8.17356 3.61902 7.84654 3.67509 7.51927 3.65768C7.192 3.64028 6.87277 3.54984 6.585 3.393L6.12 3.138C4.1955 2.091 2.091 4.1955 3.1395 6.1185L3.393 6.585C4.062 7.815 3.4275 9.3465 2.085 9.7425L1.575 9.8925C-0.525 10.512 -0.525 13.488 1.575 14.1075L2.085 14.2575C2.39939 14.3501 2.68908 14.5118 2.93282 14.7309C3.17656 14.95 3.36817 15.2209 3.4936 15.5237C3.61902 15.8264 3.67509 16.1535 3.65768 16.4807C3.64028 16.808 3.54984 17.1272 3.393 17.415L3.138 17.88C2.091 19.8045 4.1955 21.909 6.1185 20.8605L6.585 20.607C6.87277 20.4502 7.192 20.3597 7.51927 20.3423C7.84654 20.3249 8.17356 20.381 8.47634 20.5064C8.77913 20.6318 9.05 20.8234 9.26909 21.0672C9.48818 21.3109 9.64994 21.6006 9.7425 21.915L9.8925 22.425C10.512 24.525 13.488 24.525 14.1075 22.425L14.2575 21.915C14.3501 21.6006 14.5118 21.3109 14.7309 21.0672C14.95 20.8234 15.2209 20.6318 15.5237 20.5064C15.8264 20.381 16.1535 20.3249 16.4807 20.3423C16.808 20.3597 17.1272 20.4502 17.415 20.607L17.88 20.862C19.8045 21.909 21.909 19.8045 20.8605 17.8815L20.607 17.415C20.4502 17.1272 20.3597 16.808 20.3423 16.4807C20.3249 16.1535 20.381 15.8264 20.5064 15.5237C20.6318 15.2209 20.8234 14.95 21.0672 14.7309C21.3109 14.5118 21.6006 14.3501 21.915 14.2575L22.425 14.1075C24.525 13.488 24.525 10.512 22.425 9.8925L21.915 9.7425C21.6006 9.64994 21.3109 9.48818 21.0672 9.26909C20.8234 9.05 20.6318 8.77913 20.5064 8.47634C20.381 8.17356 20.3249 7.84654 20.3423 7.51927C20.3597 7.192 20.4502 6.87277 20.607 6.585L20.862 6.12C21.909 4.1955 19.8045 2.091 17.8815 3.1395L17.415 3.393C17.1272 3.54984 16.808 3.64028 16.4807 3.65768C16.1535 3.67509 15.8264 3.61902 15.5237 3.4936C15.2209 3.36817 14.95 3.17656 14.7309 2.93282C14.5118 2.68908 14.3501 2.39939 14.2575 2.085L14.1075 1.575ZM12 16.395C10.8344 16.395 9.71649 15.932 8.89227 15.1077C8.06804 14.2835 7.605 13.1656 7.605 12C7.605 10.8344 8.06804 9.71649 8.89227 8.89227C9.71649 8.06804 10.8344 7.605 12 7.605C13.1652 7.605 14.2827 8.06789 15.1067 8.89183C15.9306 9.71577 16.3935 10.8333 16.3935 11.9985C16.3935 13.1637 15.9306 14.2812 15.1067 15.1052C14.2827 15.9291 13.1652 16.392 12 16.392V16.395Z"
      fill="#6D6D6D"
    />
  </svg>
);

const Search = ({
  width = '19',
  height = '22',
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 19 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={inlineStyles}
  >
    <path
      d="M8.3359 0.795898C6.12509 0.795901 4.00483 1.66957 2.44155 3.22471C0.878267 4.77984 1.63606e-05 6.88906 0 9.08837C-1.14812e-06 11.2877 0.878242 13.3969 2.44153 14.9521C4.00481 16.5072 6.12508 17.3809 8.3359 17.3809C10.5467 17.3809 12.667 16.5072 14.2303 14.9521C15.7935 13.3969 16.6718 11.2877 16.6718 9.08837C16.6718 6.88906 15.7935 4.77984 14.2302 3.22471C12.667 1.66957 10.5467 0.795901 8.3359 0.795898ZM8.3359 2.23728C9.2594 2.23728 10.1739 2.41448 11.0271 2.75878C11.8803 3.10308 12.6555 3.60773 13.3085 4.24391C13.9615 4.88009 14.4795 5.63535 14.833 6.46656C15.1864 7.29778 15.3683 8.18867 15.3683 9.08837C15.3683 9.98807 15.1864 10.879 14.833 11.7102C14.4795 12.5414 13.9615 13.2966 13.3085 13.9328C12.6555 14.569 11.8803 15.0737 11.0271 15.418C10.1739 15.7623 9.2594 15.9395 8.3359 15.9395C6.47081 15.9394 4.68211 15.2176 3.3633 13.9328C2.04449 12.648 1.30359 10.9054 1.30359 9.08837C1.30359 7.27135 2.04449 5.52876 3.3633 4.24393C4.68211 2.9591 6.47081 2.23729 8.3359 2.23728Z"
      fill="#6D6D6D"
    />
    <path
      d="M18.2769 19.4614L14.5117 15.1191C13.8627 14.3706 13.0706 14.1102 12.7427 14.5375C12.4147 14.9648 12.6749 15.918 13.324 16.6665L17.0891 21.0087C17.7382 21.7572 18.5302 22.0176 18.8582 21.5903C19.1862 21.1631 18.9259 20.2099 18.2769 19.4614Z"
      fill="#6D6D6D"
    />
  </svg>
);

const Bell = ({
  width = '24',
  height = '24',
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={inlineStyles}
  >
    <path
      d="M12.0199 20.5299C9.68987 20.5299 7.35987 20.1599 5.14987 19.4199C4.30987 19.1299 3.66987 18.5399 3.38987 17.7699C3.09987 16.9999 3.19987 16.1499 3.65987 15.3899L4.80987 13.4799C5.04987 13.0799 5.26987 12.2799 5.26987 11.8099V8.91992C5.26987 5.19992 8.29987 2.16992 12.0199 2.16992C15.7399 2.16992 18.7699 5.19992 18.7699 8.91992V11.8099C18.7699 12.2699 18.9899 13.0799 19.2299 13.4899L20.3699 15.3899C20.7999 16.1099 20.8799 16.9799 20.5899 17.7699C20.2999 18.5599 19.6699 19.1599 18.8799 19.4199C16.6799 20.1599 14.3499 20.5299 12.0199 20.5299ZM12.0199 3.66992C9.12987 3.66992 6.76987 6.01992 6.76987 8.91992V11.8099C6.76987 12.5399 6.46987 13.6199 6.09987 14.2499L4.94987 16.1599C4.72987 16.5299 4.66987 16.9199 4.79987 17.2499C4.91987 17.5899 5.21987 17.8499 5.62987 17.9899C9.80987 19.3899 14.2399 19.3899 18.4199 17.9899C18.7799 17.8699 19.0599 17.5999 19.1899 17.2399C19.3199 16.8799 19.2899 16.4899 19.0899 16.1599L17.9399 14.2499C17.5599 13.5999 17.2699 12.5299 17.2699 11.7999V8.91992C17.2699 6.01992 14.9199 3.66992 12.0199 3.66992Z"
      fill="#67D89E"
    />
    <path
      d="M13.8801 3.94018C13.8101 3.94018 13.7401 3.93018 13.6701 3.91018C13.3801 3.83018 13.1001 3.77018 12.8301 3.73018C11.9801 3.62018 11.1601 3.68018 10.3901 3.91018C10.1101 4.00018 9.81011 3.91018 9.62011 3.70018C9.43011 3.49018 9.37011 3.19018 9.48011 2.92018C9.89011 1.87018 10.8901 1.18018 12.0301 1.18018C13.1701 1.18018 14.1701 1.86018 14.5801 2.92018C14.6801 3.19018 14.6301 3.49018 14.4401 3.70018C14.2901 3.86018 14.0801 3.94018 13.8801 3.94018Z"
      fill="#67D89E"
    />
    <path
      d="M12.02 22.8101C11.03 22.8101 10.07 22.4101 9.37002 21.7101C8.67002 21.0101 8.27002 20.0501 8.27002 19.0601H9.77002C9.77002 19.6501 10.01 20.2301 10.43 20.6501C10.85 21.0701 11.43 21.3101 12.02 21.3101C13.26 21.3101 14.27 20.3001 14.27 19.0601H15.77C15.77 21.1301 14.09 22.8101 12.02 22.8101Z"
      fill="#67D89E"
    />
  </svg>
);

const ArrowRight = ({
  width = '8',
  height = '13',
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 8 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={inlineStyles}
  >
    <path
      d="M1.22306 1.50108C0.879669 1.15768 0.879669 0.600936 1.22306 0.257544C1.56645 -0.085848 2.1232 -0.085848 2.46659 0.257544L7.74246 5.53341C8.08585 5.8768 8.08585 6.43355 7.74246 6.77694L2.46659 12.0528C2.1232 12.3962 1.56645 12.3962 1.22306 12.0528C0.879669 11.7094 0.879669 11.1527 1.22306 10.8093L5.87716 6.15517L1.22306 1.50108Z"
      fill="white"
    />
  </svg>
);

const Close = ({
  width = '14',
  height = '14',
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={inlineStyles}
  >
    <path
      d="M0.293723 0.293723C0.386594 0.200617 0.496921 0.126747 0.618385 0.076345C0.739849 0.0259431 0.870063 0 1.00157 0C1.13307 0 1.26329 0.0259431 1.38475 0.076345C1.50622 0.126747 1.61654 0.200617 1.70941 0.293723L7.00026 5.58657L12.2911 0.293723C12.3841 0.200767 12.4944 0.127031 12.6159 0.0767236C12.7373 0.0264163 12.8675 0.000523453 12.999 0.000523453C13.1304 0.000523453 13.2606 0.0264163 13.382 0.0767236C13.5035 0.127031 13.6138 0.200767 13.7068 0.293723C13.7998 0.386679 13.8735 0.497033 13.9238 0.618485C13.9741 0.739938 14 0.87011 14 1.00157C14 1.13303 13.9741 1.2632 13.9238 1.38465C13.8735 1.50611 13.7998 1.61646 13.7068 1.70941L8.41395 7.00026L13.7068 12.2911C13.7998 12.3841 13.8735 12.4944 13.9238 12.6159C13.9741 12.7373 14 12.8675 14 12.999C14 13.1304 13.9741 13.2606 13.9238 13.382C13.8735 13.5035 13.7998 13.6138 13.7068 13.7068C13.6138 13.7998 13.5035 13.8735 13.382 13.9238C13.2606 13.9741 13.1304 14 12.999 14C12.8675 14 12.7373 13.9741 12.6159 13.9238C12.4944 13.8735 12.3841 13.7998 12.2911 13.7068L7.00026 8.41395L1.70941 13.7068C1.61646 13.7998 1.50611 13.8735 1.38465 13.9238C1.2632 13.9741 1.13303 14 1.00157 14C0.87011 14 0.739938 13.9741 0.618485 13.9238C0.497033 13.8735 0.386679 13.7998 0.293723 13.7068C0.200767 13.6138 0.127031 13.5035 0.0767236 13.382C0.0264163 13.2606 0.000523453 13.1304 0.000523453 12.999C0.000523453 12.8675 0.0264163 12.7373 0.0767236 12.6159C0.127031 12.4944 0.200767 12.3841 0.293723 12.2911L5.58657 7.00026L0.293723 1.70941C0.200617 1.61654 0.126747 1.50622 0.076345 1.38475C0.0259431 1.26329 0 1.13307 0 1.00157C0 0.870063 0.0259431 0.739849 0.076345 0.618385C0.126747 0.496921 0.200617 0.386594 0.293723 0.293723Z"
      fill="black"
    />
  </svg>
);

const Selected = ({
  width = '20',
  height = '20',
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={inlineStyles}
  >
    <rect x="0.5" y="0.5" width="19" height="19" rx="4.5" stroke="black" />
    <g clipPath="url(#clip0_1_1719)">
      <path
        d="M7.87459 14.3316C7.53396 14.3317 7.20728 14.1963 6.96662 13.9553L4.22153 11.2112C3.92616 10.9157 3.92616 10.4368 4.22153 10.1413C4.517 9.84591 4.99595 9.84591 5.29142 10.1413L7.87459 12.7245L14.7086 5.89048C15.004 5.5951 15.483 5.5951 15.7785 5.89048C16.0738 6.18594 16.0738 6.6649 15.7785 6.96037L8.78256 13.9553C8.5419 14.1963 8.21523 14.3317 7.87459 14.3316Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_1719">
        <rect width="12" height="12" fill="white" transform="translate(4 4)" />
      </clipPath>
    </defs>
  </svg>
);

const ArrowLeft = ({
  width = '20',
  height = '19',
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={inlineStyles}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.75 9.42656C19.75 9.75486 19.6216 10.0697 19.3931 10.3019C19.1645 10.534 18.8546 10.6644 18.5314 10.6644L4.41253 10.6644L9.64525 15.9774C9.75856 16.0925 9.84843 16.2291 9.90975 16.3795C9.97107 16.5299 10.0026 16.691 10.0026 16.8538C10.0026 17.0166 9.97107 17.1777 9.90975 17.3281C9.84843 17.4785 9.75856 17.6151 9.64525 17.7302C9.53195 17.8453 9.39744 17.9366 9.24941 17.9989C9.10137 18.0612 8.94271 18.0932 8.78248 18.0932C8.62224 18.0932 8.46358 18.0612 8.31554 17.9989C8.16751 17.9366 8.033 17.8453 7.9197 17.7302L0.608015 10.303C0.494529 10.188 0.404493 10.0514 0.343059 9.90099C0.281625 9.7506 0.250002 9.58938 0.250002 9.42655C0.250002 9.26373 0.281625 9.10251 0.343059 8.95212C0.404493 8.80173 0.494529 8.66513 0.608015 8.55014L7.9197 1.12291C8.033 1.00782 8.16751 0.916521 8.31554 0.854234C8.46358 0.791946 8.62224 0.759887 8.78248 0.759887C8.94271 0.759887 9.10137 0.791946 9.24941 0.854234C9.39744 0.916521 9.53195 1.00782 9.64526 1.12291C9.87408 1.35535 10.0026 1.6706 10.0026 1.99932C10.0026 2.16209 9.97107 2.32326 9.90975 2.47364C9.84843 2.62401 9.75856 2.76064 9.64525 2.87574L4.41253 8.18868L18.5314 8.18868C18.8546 8.18868 19.1645 8.3191 19.3931 8.55125C19.6216 8.78339 19.75 9.09825 19.75 9.42656Z"
      fill="white"
    />
  </svg>
);

const ArrowBottom = ({
  width = '10',
  height = '6',
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={inlineStyles}
  >
    <path
      d="M8.14944 0.35624C8.38982 0.115866 8.77954 0.115866 9.01991 0.35624C9.26029 0.596614 9.26029 0.986338 9.01991 1.22671L5.32681 4.91982C5.08644 5.16019 4.69671 5.16019 4.45634 4.91982L0.763235 1.22671C0.522862 0.986338 0.522862 0.596614 0.763235 0.35624C1.00361 0.115865 1.39333 0.115865 1.63371 0.35624L4.89157 3.61411L8.14944 0.35624Z"
      fill="white"
    />
  </svg>
);

const Email = ({
  width = '16',
  height = '13',
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={inlineStyles}
  >
    <path
      d="M0 2.57349C0 2.04305 0.210714 1.53435 0.585786 1.15927C0.960859 0.7842 1.46957 0.573486 2 0.573486H14C14.5304 0.573486 15.0391 0.7842 15.4142 1.15927C15.7893 1.53435 16 2.04305 16 2.57349V10.5735C16 11.1039 15.7893 11.6126 15.4142 11.9877C15.0391 12.3628 14.5304 12.5735 14 12.5735H2C1.46957 12.5735 0.960859 12.3628 0.585786 11.9877C0.210714 11.6126 0 11.1039 0 10.5735V2.57349ZM2 1.57349C1.73478 1.57349 1.48043 1.67884 1.29289 1.86638C1.10536 2.05392 1 2.30827 1 2.57349V2.79049L8 6.99049L15 2.79049V2.57349C15 2.30827 14.8946 2.05392 14.7071 1.86638C14.5196 1.67884 14.2652 1.57349 14 1.57349H2ZM15 3.95649L10.292 6.78149L15 9.67849V3.95649ZM14.966 10.8325L9.326 7.36149L8 8.15649L6.674 7.36149L1.034 10.8315C1.09083 11.0443 1.21632 11.2324 1.39099 11.3665C1.56566 11.5007 1.77975 11.5735 2 11.5735H14C14.2201 11.5735 14.4341 11.5009 14.6088 11.3669C14.7834 11.233 14.909 11.0451 14.966 10.8325ZM1 9.67849L5.708 6.78149L1 3.95649V9.67849Z"
      fill="#6D6D6D"
    />
  </svg>
);

const Password = ({
  width = '14',
  height = '17',
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={inlineStyles}
  >
    <path
      d="M11.6666 5.90682V5.24015C11.6666 4.00248 11.1749 2.81549 10.2997 1.94032C9.42458 1.06515 8.2376 0.573486 6.99992 0.573486C5.76224 0.573486 4.57526 1.06515 3.70009 1.94032C2.82492 2.81549 2.33325 4.00248 2.33325 5.24015V5.90682H0.333252V14.5735C0.333252 15.1039 0.543966 15.6126 0.919038 15.9877C1.29411 16.3628 1.80282 16.5735 2.33325 16.5735H11.6666C12.197 16.5735 12.7057 16.3628 13.0808 15.9877C13.4559 15.6126 13.6666 15.1039 13.6666 14.5735V5.90682H11.6666ZM3.66658 5.24015C3.66659 4.3561 4.01777 3.50825 4.6429 2.88313C5.26802 2.25801 6.11586 1.90682 6.99992 1.90682C7.88397 1.90682 8.73182 2.25801 9.35694 2.88313C9.98206 3.50825 10.3333 4.3561 10.3333 5.24015V5.90682H3.66658V5.24015ZM12.3333 14.5735C12.3333 14.7503 12.263 14.9199 12.138 15.0449C12.013 15.1699 11.8434 15.2402 11.6666 15.2402H2.33325C2.15644 15.2402 1.98687 15.1699 1.86185 15.0449C1.73682 14.9199 1.66659 14.7503 1.66659 14.5735V7.24015H12.3333V14.5735Z"
      fill="#6D6D6D"
    />
    <path
      d="M7.66659 9.90674H6.33325V12.5734H7.66659V9.90674Z"
      fill="#6D6D6D"
    />
  </svg>
);

const Human = ({
  width = '16',
  height = '17',
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={inlineStyles}
  >
    <path
      d="M8 8.57349C8.79565 8.57349 9.55871 8.25742 10.1213 7.69481C10.6839 7.1322 11 6.36914 11 5.57349C11 4.77784 10.6839 4.01478 10.1213 3.45217C9.55871 2.88956 8.79565 2.57349 8 2.57349C7.20435 2.57349 6.44129 2.88956 5.87868 3.45217C5.31607 4.01478 5 4.77784 5 5.57349C5 6.36914 5.31607 7.1322 5.87868 7.69481C6.44129 8.25742 7.20435 8.57349 8 8.57349ZM10 5.57349C10 6.10392 9.78929 6.61263 9.41421 6.9877C9.03914 7.36277 8.53043 7.57349 8 7.57349C7.46957 7.57349 6.96086 7.36277 6.58579 6.9877C6.21071 6.61263 6 6.10392 6 5.57349C6 5.04305 6.21071 4.53435 6.58579 4.15927C6.96086 3.7842 7.46957 3.57349 8 3.57349C8.53043 3.57349 9.03914 3.7842 9.41421 4.15927C9.78929 4.53435 10 5.04305 10 5.57349ZM14 13.5735C14 14.5735 13 14.5735 13 14.5735H3C3 14.5735 2 14.5735 2 13.5735C2 12.5735 3 9.57349 8 9.57349C13 9.57349 14 12.5735 14 13.5735ZM13 13.5695C12.999 13.3235 12.846 12.5835 12.168 11.9055C11.516 11.2535 10.289 10.5735 8 10.5735C5.71 10.5735 4.484 11.2535 3.832 11.9055C3.154 12.5835 3.002 13.3235 3 13.5695H13Z"
      fill="#6D6D6D"
    />
  </svg>
);

const Facebook = ({
  width = '12',
  height = '21',
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={inlineStyles}
  >
    <g clipPath="url(#clip0_1_2079)">
      <path
        d="M3.24686 20.5735V11.1889H0.375V7.81001H3.24686V4.92399C3.24686 2.65613 4.94329 0.573486 8.8522 0.573486C10.4349 0.573486 11.6052 0.704586 11.6052 0.704586L11.5129 3.85991C11.5129 3.85991 10.3194 3.84987 9.017 3.84987C7.60739 3.84987 7.38155 4.41117 7.38155 5.34279V7.81001H11.625L11.4404 11.1889H7.38155V20.5735H3.24686Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_2079">
        <rect
          width="11.25"
          height="20"
          fill="white"
          transform="translate(0.375 0.573486)"
        />
      </clipPath>
    </defs>
  </svg>
);

const Google = ({
  width = '21',
  height = '21',
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={inlineStyles}
  >
    <path
      d="M20.0328 10.7605C20.0328 9.94116 19.9664 9.34322 19.8225 8.72314H10.4658V12.4215H15.958C15.8473 13.3405 15.2493 14.7247 13.9206 15.6547L13.9019 15.7786L16.8603 18.0704L17.0653 18.0909C18.9477 16.3524 20.0328 13.7945 20.0328 10.7605Z"
      fill="white"
    />
    <path
      d="M10.4657 20.5047C13.1563 20.5047 15.4152 19.6188 17.0651 18.0908L13.9204 15.6547C13.0789 16.2415 11.9494 16.6512 10.4657 16.6512C7.83032 16.6512 5.5936 14.9128 4.79627 12.51L4.6794 12.5199L1.60322 14.9006L1.56299 15.0125C3.20177 18.2679 6.56795 20.5047 10.4657 20.5047Z"
      fill="white"
    />
    <path
      d="M4.79626 12.5101C4.58588 11.89 4.46412 11.2256 4.46412 10.5391C4.46412 9.85251 4.58588 9.18816 4.78519 8.56808L4.77962 8.43602L1.66489 6.01709L1.56298 6.06556C0.887557 7.41648 0.5 8.9335 0.5 10.5391C0.5 12.1446 0.887557 13.6616 1.56298 15.0125L4.79626 12.5101Z"
      fill="white"
    />
    <path
      d="M10.4657 4.42685C12.337 4.42685 13.5992 5.23517 14.319 5.91066L17.1315 3.16456C15.4042 1.55898 13.1563 0.573486 10.4657 0.573486C6.56795 0.573486 3.20177 2.8102 1.56299 6.06562L4.7852 8.56814C5.5936 6.16532 7.83032 4.42685 10.4657 4.42685Z"
      fill="white"
    />
  </svg>
);

const IconWithText = ({ icon, text }: Pick<Props, 'icon' | 'text'>) => (
  <div className={styles.iconWithText}>
    {icon}
    <span>{text}</span>
  </div>
);

export {
  IconWithText,
  Logo,
  Search,
  Bell,
  Home,
  Love,
  Ticket,
  Settings,
  ArrowRight,
  ArrowBottom,
  Facebook,
  Google,
  ArrowLeft,
  Email,
  Password,
  Human,
  Selected,
  Close,
};
