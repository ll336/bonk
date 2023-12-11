/**
 * @module ComponentExports
 * @description Consolidates multiple components into one place for efficient imports.
 *
 * @exports Component Borders
 * @exports Component Tab
 * @exports Component Header
 * @exports Component Task
 * @exports Component Claim
 * @exports Component WhitelistModal
 * @exports Component TensorModal
 * @exports Component TwitterTaskModal
 * @exports Component ConnectSocialModal
 * @exports Component ProgressLottie
 * @exports Component DropDown
 */

import Borders from "./Borders/Borders";
import Tab from "./Tab/Tab";
import Header from "./Header/Header";
/* import Task from "./Task/Task";
import Claim from "./Claim/Claim";
import WhitelistModal from "./Modal/WhitelistModal";
import TensorModal from "./Modal/TensorModal";
import TwitterTaskModal from "./Modal/TwitterTaskModal";
import NameModal from "./Modal/NameModal";
import ConnectSocialModal from "./Modal/ConnectSocialModal"; */
import ProgressLottie from "./Lottie/ProgressLottie";
import DropDown from "./Header/DropDown";
import Connect from "./Connect/connect"
import Toast from './Toast/Toast'

export {
  Borders,
  Tab,
  Header,
  ProgressLottie,
  DropDown,
  Connect,
  Toast 
/*Task,
  Claim,
  WhitelistModal,
  TensorModal,
  ConnectSocialModal,
  TwitterTaskModal,
  NameModal,*/
  
};
