import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    name: 'Login',
    path: '/',
    component: {
      template: /* html */ `<div>
      <h1>Login</h1>
      <router-view />
    </div>`,
    },
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: {
      template: /* html */ `<div>
      <h1>Login</h1>
      <router-view />
    </div>`,
    },
  },
  {
    name: 'Dropshipping',
    path: '/dropshipping',
    component: {
      template: /* html */ `<div>
        <h1>Dropshipping</h1>
        <router-view />
      </div>`,
    },
    children: [
      {
        name: 'DropshippingBatches',
        path: '/dropshipping/batches',
        component: {
          template: /* html */ `<div>
          <h1>Dropshipping Batches</h1>
          <router-view />
        </div>`,
        },
      },
      {
        name: 'DropshippingOrders',
        path: '/dropshipping/orders',
        component: {
          template: /* html */ `<div>
        <h1>Dropshipping Orders</h1>
        <router-view />
      </div>`,
        },
      },
      {
        name: 'DropshippingItems',
        path: '/dropshipping/items',
        component: {
          template: /* html */ `<div>
        <h1>Dropshipping Items</h1>
        <router-view />
      </div>`,
        },
      },
      {
        name: 'DropshippingCustomer',
        path: '/dropshipping/customer',
        component: {
          template: /* html */ `<div>
        <h1>Dropshipping Customer</h1>
        <router-view />
      </div>`,
        },
      },
      {
        name: 'DropshippingProcurement',
        path: '/dropshipping/procurement',
        component: {
          template: /* html */ `<div>
        <h1>Dropshipping Procurement</h1>
        <router-view />
      </div>`,
        },
      },
    ],
  },
  {
    name: 'Couponing',
    path: '/couponing',
    component: {
      template: /* html */ `<div>
        <h1>Couponing</h1>
        <router-view />
      </div>`,
    },
    children: [
      {
        name: 'CouponingApplications',
        path: '/couponing/applications',
        component: {
          template: /* html */ `<div>
        <h1>Couponing lications</h1>
        <router-view />
      </div>`,
        },
      },
      {
        name: 'CouponingBrands',
        path: '/couponing/brands',
        component: {
          template: /* html */ `<div>
        <h1>Couponing Brands</h1>
        <router-view />
      </div>`,
        },
      },
      {
        name: 'CouponingCampaigns',
        path: '/couponing/campaigns',
        component: {
          template: /* html */ `<div>
        <h1>Couponing Campaigns</h1>
        <router-view />
      </div>`,
        },
      },
      {
        name: 'CouponingEstates',
        path: '/couponing/estates',
        component: {
          template: /* html */ `<div>
        <h1>Couponing Estates</h1>
        <router-view />
      </div>`,
        },
      },
    ],
  },
  {
    name: 'Profile',
    path: '/profile',
    component: {
      template: /* html */ `<div>
      <h1>Profile Page</h1>
      <router-view />
    </div>`,
    },
  },
  {
    name: 'Agency',
    path: '/agencies/:agencyId',
    component: {
      template: /* html */ `<div>
      <h1>Agency Page</h1>
      <router-view />
    </div>`,
    },
  },
  {
    name: 'SignOut',
    path: '/sign-out',
    component: {
      template: /* html */ `<div>
      <h1>Sign Out Page</h1>
      <router-view />
    </div>`,
    },
  },
  {
    name: 'Support',
    path: '/support',
    component: {
      template: /* html */ `<div>
      <h1>Support Page</h1>
      <router-view />
    </div>`,
    },
  },
  {
    name: 'Settings',
    path: '/settings',
    component: {
      template: /* html */ `<div>
      <h1>Settings Page</h1>
      <router-view />
    </div>`,
    },
  },
  {
    name: 'Search',
    path: '/search',
    component: {
      template: /* html */ `<div>
      <h1>Search Page</h1>
      <router-view />
    </div>`,
    },
  },
  {
    name: 'Profile',
    path: '/profile',
    component: {
      template: `<div>
      <h1>Profile Page</h1>
      <router-view />
    </div>`,
    },
  },
]
