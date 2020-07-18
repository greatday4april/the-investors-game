import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Activity from '../components/page/Activity';
import Associations from '../components/page/Associations';
import Billing from '../components/page/Billing';
import CustomerDetails from '../components/page/CustomerDetails';
import EventDetail from '../components/page/EventDetail';
import EventCreate from '../components/page/EventCreate';
import Events from '../components/page/Events';
import Faq from '../components/page/Faq';
import Invoice from '../components/page/Invoice';
import InvitePeople from '../components/page/InvitePeople';
import Notifications from '../components/page/Notifications';
import People from '../components/page/People';
import Pricing from '../components/pricing/Pricing';
import PricingAlt from '../components/pricing/PricingAlt';
import Profile from '../components/profile/Profile';
import Settings from '../components/page/Settings';
import Starter from '../components/extra/Starter';
import GettingStarted from '../components/documentation/GettingStarted';
import Alerts from '../components/bootstrap-components/Alerts';
import FalconAccordions from '../components/bootstrap-components/FalconAccordions';
import Spinners from '../components/bootstrap-components/Spinners';
import Carousel from '../components/bootstrap-components/Carousel';
import Avatar from '../components/bootstrap-components/Avatar';
import Badges from '../components/bootstrap-components/Badges';
import Backgrounds from '../components/bootstrap-components/Backgrounds';
import Breadcrumbs from '../components/bootstrap-components/Breadcrumb';
import Buttons from '../components/bootstrap-components/Buttons';
import Cards from '../components/bootstrap-components/Cards';
import Collapses from '../components/bootstrap-components/Collapses';
import Dropdowns from '../components/bootstrap-components/Dropdowns';
import Forms from '../components/bootstrap-components/Forms';
import ListGroups from '../components/bootstrap-components/ListGroups';
import Modals from '../components/bootstrap-components/Modals';
import Navs from '../components/bootstrap-components/Navs';
import Navbars from '../components/bootstrap-components/Navbars';
import PageHeaders from '../components/bootstrap-components/PageHeaders';
import Paginations from '../components/bootstrap-components/Paginations';
import Popovers from '../components/bootstrap-components/Popovers';
import ProgressBar from '../components/bootstrap-components/ProgressBar';
import Tables from '../components/bootstrap-components/Tables';
import Tooltips from '../components/bootstrap-components/Tooltips';
import NavBarTop from '../components/bootstrap-components/NavBarTop';
import VerticalNavbar from '../components/bootstrap-components/VerticalNavbar';
import Sidepanel from '../components/bootstrap-components/Sidepanel';
import CookieNotice from '../components/bootstrap-components/CookieNotice';
import Borders from '../components/utilities/Borders';
import Clearfix from '../components/utilities/Clearfix';
import CloseIcon from '../components/utilities/CloseIcon';
import Colors from '../components/utilities/Colors';
import Display from '../components/utilities/Display';
import Embed from '../components/utilities/Embed';
import Figures from '../components/utilities/Figures';
import Flex from '../components/utilities/Flex';
import Grid from '../components/utilities/Grid';
import Sizing from '../components/utilities/Sizing';
import Spacing from '../components/utilities/Spacing';
import StretchedLink from '../components/utilities/StretchedLink';
import Typography from '../components/utilities/Typography';
import VerticalAlign from '../components/utilities/VerticalAlign';
import Visibility from '../components/utilities/Visibility';
import Typed from '../components/plugins/Typed';
import ImageLightbox from '../components/plugins/ImageLightbox';
import GoogleMapExample from '../components/plugins/GoogleMap';
import Chart from '../components/plugins/Chart';
import CountUpExample from '../components/plugins/Countup';
import DatetimeExample from '../components/plugins/Datetime';
import FontAwesome from '../components/plugins/FontAwesome';
import Echarts from '../components/plugins/Echarts';
import Toastify from '../components/plugins/Toastify';
import Select from '../components/plugins/Select';
import SlickCarousel from '../components/plugins/SlickCarousel';
import ReactBootstrapTable2 from '../components/plugins/ReactBootstrapTable2';
import ReactBeautifulDnD from '../components/plugins/ReactBeautifulDnD';
import EmailDetail from '../components/email/EmailDetail';
import Inbox from '../components/email/Inbox';
import Compose from '../components/email/Compose';
import QuillEditorExample from '../components/plugins/Quill';
import BulkSelect from '../components/plugins/BulkSelect';
import ChangeLog from '../components/changelog/ChangeLog';
import ProgressBarJs from '../components/plugins/ProgressBarJs';
import Products from '../components/e-commerce/Products';
import ProductDetails from '../components/e-commerce/ProductDetails';
import ShoppingCart from '../components/e-commerce/ShoppingCart';
import FavouriteItems from '../components/e-commerce/FavouriteItems';
import Orders from '../components/e-commerce/Orders';
import OrderDetails from '../components/e-commerce/OrderDetails';
import Customers from '../components/e-commerce/Customers';
import Checkout from '../components/e-commerce/Checkout';
import Feed from '../components/feed/Feed';
import Plyr from '../components/plugins/Plyr';
import Scrollbar from '../components/plugins/Scrollbar';
import Leaflet from '../components/plugins/Leaflet';
import EchartMap from '../components/plugins/EchartMap';
import InboxProvider from '../components/email/inbox/InboxProvider';
import ReactHookFrom from '../components/plugins/ReactHookFrom';
import Lottie from '../components/plugins/Lottie';
import Dropzone from '../components/plugins/Dropzone';
import CodeHighlightDoc from '../components/plugins/CodeHighlightDoc';
import EmojiMart from '../components/plugins/EmojiMart';
import Chat from '../components/chat/Chat';
import Widgets from '../components/widgets/Widgets';
import Kanban from '../components/kanban/Kanban';

const InboxRoutes = ({ match: { url } }) => (
  <InboxProvider>
    <Switch>
      <Route path={`${url}/email-detail`} exact component={EmailDetail} />
      <Route path={`${url}/inbox`} exact component={Inbox} />
      <Route path={`${url}/compose`} exact component={Compose} />

      {/*Redirect*/}
      <Redirect to="/errors/404" />
    </Switch>
  </InboxProvider>
);

const ProductRoutes = ({ match: { url } }) => (
  <Switch>
    <Route path={`${url}/products/:productLayout`} exact component={Products} />
    <Route path={`${url}/checkout`} exact component={Checkout} />
    <Route path={`${url}/product-details/:id`} exact component={ProductDetails} />
    <Route path={`${url}/product-details/`} exact component={ProductDetails} />
    <Route path={`${url}/shopping-cart`} exact component={ShoppingCart} />
    <Route path={`${url}/orders`} exact component={Orders} />
    <Route path={`${url}/order-details`} exact component={OrderDetails} />
    <Route path={`${url}/customers`} exact component={Customers} />
    <Route path={`${url}/favourite-items`} exact component={FavouriteItems} />

    {/*Redirect*/}
    <Redirect to="/errors/404" />
  </Switch>
);

const DashboardRoutes = () => (
  <Switch>
    <Route path="/feed" exact component={Feed} />
    {/*Pages*/}
    <Route path="/pages/activity" exact component={Activity} />
    <Route path="/pages/associations" exact component={Associations} />
    <Route path="/pages/billing" exact component={Billing} />
    <Route path="/pages/customer-details" exact component={CustomerDetails} />
    <Route path="/pages/event-detail" exact component={EventDetail} />
    <Route path="/pages/event-create" exact component={EventCreate} />
    <Route path="/pages/events" exact component={Events} />
    <Route path="/pages/faq" exact component={Faq} />
    <Route path="/pages/invoice" exact component={Invoice} />
    <Route path="/pages/invite-people" exact component={InvitePeople} />
    <Route path="/pages/notifications" exact component={Notifications} />
    <Route path="/pages/people" exact component={People} />
    <Route path="/pages/pricing" exact component={Pricing} />
    <Route path="/pages/pricing-alt" exact component={PricingAlt} />
    <Route path="/pages/profile" exact component={Profile} />
    <Route path="/pages/settings" exact component={Settings} />
    <Route path="/pages/starter" exact component={Starter} />
    {/*chat*/}
    <Route path="/chat" exact component={Chat} />
    {/*kanban*/}
    <Route path="/kanban" exact component={Kanban} />
    {/*E commerce*/}
    <Route path="/e-commerce" component={ProductRoutes} />

    {/*Email*/}
    <Route path="/email" component={InboxRoutes} />

    {/*widgets*/}
    <Route path="/widgets" component={Widgets} />

    {/*Documentation*/}
    <Route path="/documentation" exact component={GettingStarted} />

    {/*Changelog*/}
    <Route path="/changelog" exact component={ChangeLog} />

    {/*Components*/}
    <Route path="/components/alerts" exact component={Alerts} />
    <Route path="/components/accordions" exact component={FalconAccordions} />
    <Route path="/components/avatar" exact component={Avatar} />
    <Route path="/components/badges" exact component={Badges} />
    <Route path="/components/backgrounds" exact component={Backgrounds} />
    <Route path="/components/breadcrumb" exact component={Breadcrumbs} />
    <Route path="/components/buttons" exact component={Buttons} />
    <Route path="/components/cards" exact component={Cards} />
    <Route path="/components/cookie-notice" exact component={CookieNotice} />
    <Route path="/components/collapses" exact component={Collapses} />
    <Route path="/components/dropdowns" exact component={Dropdowns} />
    <Route path="/components/forms" exact component={Forms} />
    <Route path="/components/listgroups" exact component={ListGroups} />
    <Route path="/components/modals" exact component={Modals} />
    <Route path="/components/navs" exact component={Navs} />
    <Route path="/components/navbars" exact component={Navbars} />
    <Route path="/components/navbar-top" exact component={NavBarTop} />
    <Route path="/components/navbar-vertical" exact component={VerticalNavbar} />
    <Route path="/components/Sidepanel" exact component={Sidepanel} />
    <Route path="/components/pageheaders" exact component={PageHeaders} />
    <Route path="/components/paginations" exact component={Paginations} />
    <Route path="/components/popovers" exact component={Popovers} />
    <Route path="/components/progress" exact component={ProgressBar} />
    <Route path="/components/tables" exact component={Tables} />
    <Route path="/components/tooltips" exact component={Tooltips} />
    <Route path="/components/spinners" exact component={Spinners} />
    <Route path="/components/carousel" exact component={Carousel} />

    {/*Utilities*/}
    <Route path="/utilities/borders" exact component={Borders} />
    <Route path="/utilities/clearfix" exact component={Clearfix} />
    <Route path="/utilities/closeIcon" exact component={CloseIcon} />
    <Route path="/utilities/colors" exact component={Colors} />
    <Route path="/utilities/display" exact component={Display} />
    <Route path="/utilities/embed" exact component={Embed} />
    <Route path="/utilities/figures" exact component={Figures} />
    <Route path="/utilities/flex" exact component={Flex} />
    <Route path="/utilities/grid" exact component={Grid} />
    <Route path="/utilities/sizing" exact component={Sizing} />
    <Route path="/utilities/spacing" exact component={Spacing} />
    <Route path="/utilities/stretchedLink" exact component={StretchedLink} />
    <Route path="/utilities/typography" exact component={Typography} />
    <Route path="/utilities/verticalAlign" exact component={VerticalAlign} />
    <Route path="/utilities/visibility" exact component={Visibility} />

    {/*Plugins*/}
    <Route path="/plugins/bulk-select" exact component={BulkSelect} />
    <Route path="/plugins/typed" exact component={Typed} />
    <Route path="/plugins/image-lightbox" exact component={ImageLightbox} />
    <Route path="/plugins/lottie" exact component={Lottie} />
    <Route path="/plugins/google-map" exact component={GoogleMapExample} />
    <Route path="/plugins/wysiwyg" exact component={QuillEditorExample} />
    <Route path="/plugins/chart" exact component={Chart} />
    <Route path="/plugins/countup" exact component={CountUpExample} />
    <Route path="/plugins/datetime" exact component={DatetimeExample} />
    <Route path="/plugins/fontawesome" exact component={FontAwesome} />
    <Route path="/plugins/echarts" exact component={Echarts} />
    <Route path="/plugins/toastify" exact component={Toastify} />
    <Route path="/plugins/select" exact component={Select} />
    <Route path="/plugins/slick-carousel" exact component={SlickCarousel} />
    <Route path="/plugins/scroll-bar" exact component={Scrollbar} />
    <Route path="/plugins/progressbar" exact component={ProgressBarJs} />
    <Route path="/plugins/plyr" exact component={Plyr} />
    <Route path="/plugins/react-hook-form" exact component={ReactHookFrom} />
    <Route path="/plugins/leaflet-map" exact component={Leaflet} />
    <Route path="/plugins/echart-map" exact component={EchartMap} />
    <Route path="/plugins/dropzone" exact component={Dropzone} />
    <Route path="/plugins/code-highlight" exact component={CodeHighlightDoc} />
    <Route path="/plugins/emoji-mart" exact component={EmojiMart} />
    <Route path="/plugins/react-bootstrap-table2" exact component={ReactBootstrapTable2} />
    <Route path="/plugins/react-beautiful-dnd" exact component={ReactBeautifulDnD} />

    {/*Redirect*/}
    <Redirect to="/errors/404" />
  </Switch>
);

export default DashboardRoutes;
