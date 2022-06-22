import IFarShoppingCart from '~icons/far/shopping-cart'
import IFarTachometer from '~icons/far/tachometer'
import IFarTicket from '~icons/far/ticket'
import IFarSearch from '~icons/far/search'
import IFarQuestionCircle from '~icons/far/question-circle'
import IFarCog from '~icons/far/cog'
import IFarSignOut from '~icons/far/sign-out'

import type { NavItem, NavItemSeparator } from '~/types/navItem'
import type { WithOptionalProperties } from '~/types/utils'

export const headerNavItems: Array<NavItem> = [
  { label: 'Search', route: { name: 'Search' }, icon: IFarSearch },
  { label: 'Settings', route: { name: 'Settings' }, icon: IFarCog },
  { label: 'Help & Support', route: { name: 'Support' }, icon: IFarQuestionCircle },
  { label: 'Sign Out', route: { name: 'SignOut' }, icon: IFarSignOut },
]

export const sideBarUserNavItems: Array<
  WithOptionalProperties<NavItem, 'icon'> | NavItemSeparator
> = [
  { label: 'View Profile', route: { name: 'Profile' } },
  { label: 'View Agency', route: { name: 'Agency', params: { agencyId: 1 } } },
  { isSeparator: true },
  { label: 'Sign Out', route: { name: 'SignOut' }, icon: IFarSignOut },
]

export const sideBarNavItems: Array<NavItem> = [
  {
    label: 'Dashboard',
    icon: IFarTachometer,
    route: { name: 'Dashboard' },
  },
  {
    label: 'Dropshipping',
    icon: IFarShoppingCart,
    route: { name: 'Dropshipping' },
    children: [
      {
        label: 'Batches',
        route: { name: 'DropshippingBatches' },
      },
      {
        label: 'Orders',
        route: { name: 'DropshippingOrders' },
      },
      {
        label: 'Items',
        route: { name: 'DropshippingItems' },
      },
      {
        label: 'Customer',
        route: { name: 'DropshippingCustomer' },
      },
      {
        label: 'Procurement',
        route: { name: 'DropshippingProcurement' },
      },
    ],
  },
  {
    label: 'Couponing',
    icon: IFarTicket,
    route: { name: 'Couponing' },
    children: [
      {
        label: 'Applications',
        route: { name: 'CouponingApplications' },
      },
      {
        label: 'Brands',
        route: { name: 'CouponingBrands' },
      },
      {
        label: 'Campaigns',
        route: { name: 'CouponingCampaigns' },
      },
      {
        label: 'Estates',
        route: { name: 'CouponingEstates' },
      },
    ],
  },
]
