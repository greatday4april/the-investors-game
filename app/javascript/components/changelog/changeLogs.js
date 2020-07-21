export default [
  {
    title: '2.7.0 - Spotted Kestrels',
    publish: '2 July, 2020',
    logs: {
      New: [
        'Navbar Inverted in Navbar Vertical',
        'Navbar Vibrant in Navbar Vertical',
        'Navbar Card in Navbar Vertical',
        '<strong>DOC</strong> : Vertical Navbar'
      ],
      Migration: {
        Add: ['<code>app/javascript/components/bootstrap-component/VerticalNavbar.js</code>'],
        Update: [
          '<code>app/javascript/components/main.js</code>',
          '<code>app/javascript/components/navbar/NavbarVertical.js</code>',
          '<code>app/javascript/components/side-panel/SidePanelModal.js</code>',
          '<code>assets/scss/theme/_buttons.scss</code>',
          '<code>assets/scss/dark/_variables.scss</code>',
          '<code>assets/scss/theme/_variables.scss</code>',
          '<code>assets/scss/theme/_Navbar-vertical.scss</code>'
        ]
      }
    }
  },
  {
    title: '2.6.0 - Laughing',
    publish: '27 june, 2020',
    logs: {
      New: [
        '<strong>Page</strong>: Kanban',
        '<strong>Plugin</strong>: <code>React Beautiful DnD</code>',
        '<strong>Component</strong>: Cookie Notice Alert',
        '<strong>Doc</strong>: React Beautiful DnD',
        '<strong>Doc</strong>: Cookie Notice Alert',
        '<strong>Doc</strong>: React Bootstrap Table next'
      ],

      Fix: ['Sidebar sticky-top on profile page.'],

      Migration: {
        Add: [
          '<code>app/javascript/components/kanban/**/*.*</code>',
          '<code>app/javascript/components/bootstrap-component/cookieNotice.js</code>',
          '<code>app/javascript/components/plugins/ReactBeautifulDnD.js</code>',
          '<code>app/javascript/components/plugins/ReactBootstrapTable2.js</code>',
          '<code>assets/scss/_kanban.scss</code>',
          '<code>assets/scss/_notice.scss</code>'
        ],
        Update: [
          '<code>app/javascript/routs.js</code>',
          '<code>app/javascript/helpers/utils.js</code>',
          '<code>app/javascript/layout/DashboardRoutes.js</code>',
          '<code>app/javascript/layout/DashboardLayout.js</code>',
          '<code>app/javascript/components/side-panel/SidePanelModal.js</code>',
          '<code>app/javascript/components/navbar/navbarTop.js</code> (removed <code>sticky-top</code> class from Navbar)',
          '<code>assets/scss/theme/_theme.scss</code>',
          '<code>assets/scss/theme/_mixed.scss</code>',
          '<code>assets/scss/theme/_modal.scss</code>',
          '<code>assets/scss/dark/_override.scss</code>',
          '<code>assets/scss/theme/_border.scss</code>',
          '<code>assets/scss/theme/_dropdown.scss</code>',
          '<code>assets/scss/theme/_scrollbar.scss</code>',
          '<code>assets/scss/theme/utilities/_hover.scss</code>',
          '<code>assets/scss/theme/utilities/_line-height.scss</code>'
        ]
      }
    }
  },
  {
    title: '2.5.0 - Chipping',
    publish: '29 April, 2020',
    logs: {
      New: [
        '<strong>Page</strong>: <code>Widgets</code>',
        '<strong>Component Page</strong>: <code>Carousel</code>',
        '<strong>Component Page</strong>: <code>Spinner</code>',
        '<strong>Component</strong>: <code>Navber Top</code>',
        '<strong>Component</strong>: <code>Sidepanel Modal</code>',
        '<strong>Dropdown On Hover</strong>',
        '<strong>Component Doc</strong>: <code>Navbar Top</code> ',
        '<strong>Component Doc</strong>: <code>Sidepanel</code>'
      ],

      Fix: ['Gap between Photos card and Experience card in smaller device'],

      Migration: {
        Add: [
          '<code>assets/scss/theme/_modal.scss</code>',
          '<code>app/javascript/components/widgets/**/*.*</code>',
          '<code>app/javascript/components/side-panel/**/*.*</code>',
          '<code>app/javascript/components/email/EmailDetailHeader.js</code>',
          '<code>app/javascript/components/navbar/SettingsAnimatedIcon.js</code>',
          '<code>app/javascript/components/navbar/TopNavRightSideNavItem.js</code>',
          '<code>app/javascript/components/e-commerce/OrderDetailsHeader.js</code>',
          '<code>app/javascript/components/bootstrap-components/NavBarTop.js</code>',
          '<code>app/javascript/components/navbar/LandingRightSideNavItem.js</code>',
          '<code>app/javascript/components/bootstrap-components/Sidepanel.js</code>',
          '<code>app/javascript/components/bootstrap-components/Carousel.js</code>',
          '<code>app/javascript/components/bootstrap-components/Spinners.js</code>',
          '<code>app/javascript/components/navbar/NavbarDropdownComponents.js</code>',
          '<code>app/javascript/components/dashboard/DashboardDepositStatus.js</code>'
        ],
        Update: [
          '<code>assets/scss/theme/_theme.scss</code>',
          '<code>assets/scss/theme/_forms.scss</code>',
          '<code>assets/scss/theme/_scrollbar.scss</code>',
          '<code>assets/scss/theme/_navbar.scss</code>',
          '<code>assets/scss/theme/_navbar-top.scss</code>',
          '<code>assets/scss/theme/_navbar-vertical.scss</code>',
          '<code>assets/scss/theme/_button.scss</code>',
          '<code>assets/scss/theme/utilities/_background.scss</code> in this file updated <code>.bg-gradient</code> class',
          '<code>assets/scss/theme/_variables.scss</code> updated tooltip variable',
          '<code>assets/scss/theme/_documentation.scss</code>',

          '<code>app/javascript/Main.js</code>',
          '<code>app/javascript/routes.js</code>',
          '<code>app/javascript/config.js</code>',
          '<code>app/javascript/helpers/utils.js</code>',
          '<code>app/javascript/components/page/People.js</code>',
          '<code>app/javascript/layouts/DashboardLayout.js</code>',
          '<code>app/javascript/components/email/Compose.js</code>',
          '<code>app/javascript/components/feed/FeedCard.js</code>',
          '<code>app/javascript/components/feed/AddToFeed.js</code>',
          '<code>app/javascript/components/navbar/NavbarTop.js</code>',
          '<code>app/javascript/components/email/EmailDetail.js</code>',
          '<code>app/javascript/components/feed/FeedInterest.js</code>',
          '<code>app/javascript/components/page/InvitePeople.js</code>',
          '<code>app/javascript/components/page/Notifications.js</code>',
          '<code>app/javascript/components/feed/BirthdayNotice.js</code>',
          '<code>app/javascript/components/navbar/NavbarStandard.js</code>',
          '<code>app/javascript/components/experience/Experience.js</code>',
          '<code>app/javascript/components/profile/ProfileFooter.js</code>',
          '<code>app/javascript/components/dashboard-alt/Weather.js</code>',
          '<code>app/javascript/components/navbar/NavbarDropdown.js</code>',
          '<code>app/javascript/components/navbar/ProfileDropdown.js</code>',
          '<code>app/javascript/components/dashboard-alt/TopProducts.js</code>',
          '<code>app/javascript/components/dashboard-alt/DashboardAlt.js</code>',
          '<code>app/javascript/components/dashboard-alt/SpaceWarning.js</code>',
          '<code>app/javascript/components/navbar/NotificationDropdown.js</code>',
          '<code>app/javascript/components/profile/ProfileContent.js</code> from this file, <code>ActivityLog</code> Component has been updated'
        ]
      }
    }
  },
  {
    title: '2.4.0 - Nankeen Kestrel',
    publish: '2 April, 2020',
    logs: {
      New: [
        '<strong>Page</strong>: Chat',
        '<strong>Plugin</strong>: <code>Emoji Mart</code>',
        '<strong>Doc</strong>: Emoji Mart'
      ],
      Fix: ['Dashboard recent purchases Table caret icon sorting direction issue.'],

      Migration: {
        Add: [
          '<code>app/javascript/components/chat/**/*.*</code>',
          '<code>assets/scss/theme/_chat.scss</code>',
          '<code>assets/scss/theme/plugins/_emoji.scss</code>'
        ],
        Update: [
          '<code>assets/scss/theme/_theme.scss</code>',
          '<code>assets/scss/theme/_plugins.scss</code>',
          '<code>assets/scss/theme/plugins/_react-bootstrap-table2-sort.scss</code>'
        ]
      }
    }
  },
  {
    title: '2.3.1 - Common Kestrel',
    publish: '10 March, 2020',
    logs: {
      Fix: ['Main Navigation collapse issue when navigating between pages from mobile devices'],
      Migration: {
        Replace: [
          '<code>app/javascript/components/navbar/NavbarVerticalMenu.js</code>',
          '<code>app/javascript/components/common/CodeHighlight.js</code>',
          '<code>app/javascript/components/changelog/**/*.*</code>'
        ]
      }
    }
  },
  {
    title: '2.3.0 - Lesser Kestrel',
    publish: '27 February, 2020',
    logs: {
      New: ['<strong>Feature</strong>: Navbar vertical collapsed'],
      Update: ['<strong>Doc</strong>: Lottie', '<strong>Doc</strong>: Dropzone'],
      Migration: {
        Replace: [
          '<code>package.json</code>',
          '<code>public/index.html</code>',
          '<code>public/css/**/*.*</code>',
          '<code>assets/scss/**/*.*</code>',
          '<code>app/javascript/Main.js</code>',
          '<code>app/javascript/helpers/toggleStylesheet.js</code>',
          '<code>app/javascript/components/dashboard/LeafletMap.js</code>',
          '<code>app/javascript/components/navbar/NavbarTop.js</code>',
          '<code>app/javascript/components/navbar/NavbarVertical.js</code>',
          '<code>app/javascript/components/navbar/NavbarVerticalMenu.js</code>',
          '<code>app/javascript/components/navbar/NavbarVerticalMenuItem.js</code>',
          '<code>app/javascript/components/changelog/**/*.*</code>'
        ],
        Add: [
          '<code>app/javascript/components/navbar/ToggleButton.js</code>',
          '<code>app/javascript/components/common/CodeHighlight.js</code>'
        ]
      }
    }
  },
  {
    title: '2.2.0 - Laggar',
    publish: '10 February, 2020',
    logs: {
      New: [
        '<strong>Plugin</strong>: <code>React leaflet map</code>',
        '<strong>Plugin</strong>: <code>leaflet-markercluster</code>',
        '<strong>Plugin</strong>: <code>leaflet.tilelayer.colorfilter</code>',
        '<strong>Plugin</strong>: <code>react-scrollbars-custom</code>',
        '<strong>Component</strong>: Custom Scrollbar',
        '<strong>Doc</strong>: React Hook Form',
        '<strong>Doc</strong>: Custom Scroll Bar',
        '<strong>Doc</strong>: Leaflet Map',
        '<strong>Doc</strong>: Echart Map'
      ],
      Update: [
        '<strong>Component</strong>: Disable Button',
        '<strong>Component</strong>: Purchases Table',
        '<strong>Component</strong>: Leaflet Map (Dashboard alt)',
        '<strong>Page</strong>: products List',
        '<strong>Doc</strong>: Echart'
      ]
    }
  },
  {
    title: '2.1.0 - Saker',
    publish: '20 January, 2020',
    logs: {
      New: [
        '<strong>Page</strong>: Authentication step wizard',
        '<strong>Plugin</strong>: <code>react-hook-form</code>'
      ]
    }
  },
  {
    title: '2.0.0 - Lanner',
    publish: '01 January, 2020',
    logs: {
      New: [
        '<strong>Component</strong>: Running Projects (Dashboard alt)',
        '<strong>Component</strong>: Total Sales (Dashboard alt)',
        '<strong>Mode</strong>: Dark',
        '<strong>Doc</strong>: Plyr',
        '<strong>Doc</strong>: Slick Carousel'
      ],
      Update: ['<strong>Doc</strong>: Echart']
    }
  },
  {
    title: '1.3.0 - Aplomado',
    publish: '18 December, 2019',
    logs: {
      New: ['<strong>Page</strong>: Feed', '<strong>Plugin</strong>: Plyr']
    }
  },
  {
    title: '1.2.0 - Kestrels',
    publish: '11 December, 2019',
    logs: {
      New: [
        '<strong>Page</strong>: Product List',
        '<strong>Page</strong>: Product Grid',
        '<strong>Page</strong>: Product Details',
        '<strong>Page</strong>: Orders',
        '<strong>Page</strong>: Order Details',
        '<strong>Page</strong>: Customers',
        '<strong>Page</strong>: Shopping Cart',
        '<strong>Page</strong>: Checkout',
        '<strong>Page</strong>: Favorite Items',
        'Counter on cart icon'
      ],
      Update: [
        '<strong>CSS</strong>: Bootstrap to <code>v4.4.1</code>',
        '<strong>Js</strong>: <code>utils.js</code>',
        'Top nav badge icons'
      ]
    }
  },
  {
    title: '1.1.0 - Gyrfalcon',
    publish: '04 November, 2019',
    logs: {
      New: [
        '<strong>Page</strong>: Dashboard Alt',
        '<strong>Page</strong>: Inbox',
        '<strong>Page</strong>: Email detail',
        '<strong>Page</strong>: Compose',
        '<strong>Plugin</strong>: Bulk select',
        '<strong>Plugin</strong>: WYSIWYG Editor',
        '<strong>Plugin</strong>: Progressbar'
      ],
      Fix: ['Redirect to 404'],
      Update: [
        'Add autoprefixer configuration in <code>package.json</code>',
        'Update autoprefixer configuration in <code>gulpfile.js</code>',
        '<strong>Js</strong>: <code>utils.js</code>'
      ]
    }
  },
  {
    title: '1.0.0 - initial release',
    publish: '30 September, 2019',
    children: 'Nothing to see here.'
  }
];
