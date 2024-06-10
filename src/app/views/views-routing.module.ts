import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalenderComponent } from './special-page/calender/calender.component';
import { KanbanComponent } from './special-page/kanban/kanban.component';
import { PricingComponent } from './special-page/pricing/pricing.component';
import { TimelineComponent } from './special-page/timeline/timeline.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { ApexchartComponent } from './plugins/apexchart/apexchart.component';
import { ButtonHoverComponent } from './plugins/button-hover/button-hover.component';
import { ChoiseJsComponent } from './plugins/choise-js/choise-js.component';
import { FlatpickrComponent } from './plugins/flatpickr/flatpickr.component';
import { FslightboxComponent } from './plugins/fslightbox/fslightbox.component';
import { GalleryComponent } from './plugins/gallery/gallery.component';
import { ImageComponent } from './plugins/image/image.component';
import { LoaderComponent } from './plugins/loader/loader.component';
import { RatingComponent } from './plugins/rating/rating.component';
import { Select2Component } from './plugins/select2/select2.component';
import { SweetAlertComponent } from './plugins/sweet-alert/sweet-alert.component';
import { QuillEditorComponent } from './plugins/quill-editor/quill-editor.component';
import { UppyComponent } from './plugins/uppy/uppy.component';
import { UiColorComponent } from './ui-color/ui-color.component';
import { WidgetBasicComponent } from './widget/widget-basic/widget-basic.component';
import { WidgetChartComponent } from './widget/widget-chart/widget-chart.component';
import { WidgetCardComponent } from './widget/widget-card/widget-card.component';
import { ElementsComponent } from './form/elements/elements.component';
import { WizardComponent } from './form/wizard/wizard.component';
import { ValidationComponent } from './form/validation/validation.component';
import { GoogleComponent } from './map/google/google.component';
import { VectorComponent } from './map/vector/vector.component';
import { BootstrapTableComponent } from './table/bootstrap-table/bootstrap-table.component';
import { BorderTableComponent } from './table/border-table/border-table.component';
import { FancyTableComponent } from './table/fancy-table/fancy-table.component';
import { FixedTableComponent } from './table/fixed-table/fixed-table.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { AdminComponent } from './admin/admin.component';
import { SolidComponent } from './icons/solid/solid.component';
import { OutlinedComponent } from './icons/outlined/outlined.component';
import { DualToneComponent } from './icons/dual-tone/dual-tone.component';
import { AnalyticsDashboardComponent } from './analytics-dashboard/analytics-dashboard.component';
import { CryptoDashboardComponent } from './crypto-dashboard/crypto-dashboard.component';
import { UiAvatarsComponent } from './ui-elements/ui-avatars/ui-avatars.component';
import { UiAlertsComponent } from './ui-elements/ui-alerts/ui-alerts.component';
import { UiBadgesComponent } from './ui-elements/ui-badges/ui-badges.component';
import { UiBreadcrumbComponent } from './ui-elements/ui-breadcrumb/ui-breadcrumb.component';
import { UiButtonsComponent } from './ui-elements/ui-buttons/ui-buttons.component';
import { UiButtonsGroupComponent } from './ui-elements/ui-buttons-group/ui-buttons-group.component';
import { UiOffcanvasComponent } from './ui-elements/ui-offcanvas/ui-offcanvas.component';
import { UiColorsComponent } from './ui-elements/ui-colors/ui-colors.component';
import { UiCardsComponent } from './ui-elements/ui-cards/ui-cards.component';
import { UiCarouselComponent } from './ui-elements/ui-carousel/ui-carousel.component';
import { UiGridComponent } from './ui-elements/ui-grid/ui-grid.component';
import { UiImagesComponent } from './ui-elements/ui-images/ui-images.component';
import { UiListGroupComponent } from './ui-elements/ui-list-group/ui-list-group.component';
import { UiModalComponent } from './ui-elements/ui-modal/ui-modal.component';
import { UiNotificationsComponent } from './ui-elements/ui-notifications/ui-notifications.component';
import { UiPaginationComponent } from './ui-elements/ui-pagination/ui-pagination.component';
import { UiPopoversComponent } from './ui-elements/ui-popovers/ui-popovers.component';
import { UiTypographyComponent } from './ui-elements/ui-typography/ui-typography.component';
import { UiTabsComponent } from './ui-elements/ui-tabs/ui-tabs.component';
import { UiTooltipsComponent } from './ui-elements/ui-tooltips/ui-tooltips.component';
import { UiEmbedVideoComponent } from './ui-elements/ui-embed-video/ui-embed-video.component';
import { BillingComponent } from './special-page/billing/billing/billing.component';
import { ProjetListComponent } from './projets/projet-list/projet-list.component';
import { ProjetAddComponent } from './projets/projet-add/projet-add.component';
import { ActionListComponent } from './actions/action-list/action-list.component';
import { ActionAddComponent } from './actions/action-add/action-add.component';
import { ActionDetailsComponent } from './actions/action-details/action-details.component';
import { ProjetDetailsComponent } from './projets/projet-details/projet-details.component';
import { CreateDemandeComponent } from './demandes/create-demande/create-demande.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SoldeComponent } from './solde/solde.component';
import { EncaissementArgentComponent } from './encaissement-argent/encaissement-argent.component';

const routes: Routes = [
  // Component Routes
  {
    path: 'dashboard',
    component: AnalyticsDashboardComponent,
    data: {routeName: 'default.dashboard', pageTitle:'Tableau de bord'}
  },

  {
    path: 'projets/projet-list',
    component: ProjetListComponent,
    data: {routeName: 'projets.projet-list', pageTitle:'Liste Projets'}
  },
  {
    path: 'projets/projet-add',
    component: ProjetAddComponent,
    data: {routeName: 'projets.projet-add', pageTitle:'Ajouter Projet'}
  },
  {
    path: 'projets/projet-details',
    component: ProjetDetailsComponent,
    data: {routeName: 'projets.projet-details', pageTitle:'Details Projet'}
  },


  {
    path: 'actions/action-list',
    component: ActionListComponent,
    data: {routeName: 'actions.action-list', pageTitle:'List Actions'}
  },
  {
    path: 'actions/action-add',
    component: ActionAddComponent,
    data: {routeName: 'actions.action-add', pageTitle:'Ajouter Action'}
  },
  {
    path: 'actions/action-details',
    component: ActionDetailsComponent,
    data: {routeName: 'actions.action-details', pageTitle:'Details Action'}
  },
  {
    path: 'encaissement',
    component: EncaissementArgentComponent,
    data: {routeName: 'consultation.encaissement', pageTitle:'encaissement'}
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
    data: {routeName: 'home.subscription', pageTitle:'subscription'}
  },
  {
    path: 'solde',
    component: SoldeComponent,
    data: {routeName: 'consultation.solde', pageTitle:'solde'}
  },
  {
    path: 'special-pages/billing',
    component: BillingComponent,
    data: {routeName: 'spacial-pages.billing', pageTitle:'Billing'}
  },
  {
    path: 'special-pages/calender',
    component: CalenderComponent,
    data: {routeName: 'spacial-pages.calender', pageTitle:'Calender'}
  },
  {
    path: 'special-pages/kanban',
    component: KanbanComponent,
    data: {routeName: 'spacial-pages.kanban', pageTitle:'Kanban'}
  },
  {
    path: 'special-pages/pricing',
    component: PricingComponent,
    data: {routeName: 'spacial-pages.pricing', pageTitle:'Pricing'}
  },
  {
    path: 'special-pages/timeline',
    component: TimelineComponent,
    data: {routeName: 'spacial-pages.timeline',pageTitle:'Pricing'}
  },
  {
    path: 'users/user-profile',
    component: UserProfileComponent,
    data: {routeName: 'users.user-profile', pageTitle:'User'}
  },
  {
    path: 'users/user-add',
    component: UserAddComponent,
    data: {routeName: 'users.user-add', pageTitle:'Ajouter User'}
  },
  {
    path: 'users/user-list',
    component: UserListComponent,
    data: {routeName: 'users.user-list', pageTitle:'List Users '}
  },
  {
    path: 'plugins/apexchart',
    component: ApexchartComponent,
    data: {routeName: 'plugins.apexchart', pageTitle:'Apexchart'}
  },
  {
    path: 'plugins/button-hover',
    component: ButtonHoverComponent,
    data: {routeName: 'plugins.button-hover', pageTitle:'Button Hover'}
  },
  {
    path: 'plugins/choise-js',
    component: ChoiseJsComponent,
    data: {routeName: 'plugins.choise-js', pageTitle:'Choise Js'}
  },
  {
    path: 'plugins/flatpickr',
    component: FlatpickrComponent,
    data: {routeName: 'plugins.flatpicker', pageTitle:'Flatpicker'}
  },
  {
    path: 'plugins/fslightbox',
    component: FslightboxComponent,
    data: {routeName: 'plugins.fslightbox', pageTitle:'Fslightbox'}
  },
  {
    path: 'plugins/gallery',
    component: GalleryComponent,
    data: {routeName: 'plugins.gallery', pageTitle:'Gallery'}
  },
  {
    path: 'plugins/image',
    component: ImageComponent,
    data: {routeName: 'plugins.image', pageTitle:'Image'}
  },
  {
    path: 'plugins/loader',
    component: LoaderComponent,
    data: {routeName: 'plugins.loader', pageTitle:'Loader'}
  },
  {
    path: 'plugins/rating',
    component: RatingComponent,
    data: {routeName: 'plugins.rating', pageTitle:'Rating'}
  },
  {
    path: 'plugins/select2',
    component: Select2Component,
    data: {routeName: 'plugins.select2', pageTitle:'Select2'}
  },
  {
    path: 'plugins/sweet-alert',
    component: SweetAlertComponent,
    data: {routeName: 'plugins.sweet-alert', pageTitle:'Sweet Alert'}
  },
  {
    path: 'plugins/quill-editor',
    component: QuillEditorComponent,
    data: {routeName: 'plugins.quill-editor', pageTitle:'Quill Editor'}
  },
  {
    path: 'plugins/uppy',
    component: UppyComponent,
    data: {routeName: 'plugins.uppy', pageTitle:'Uppy'}
  },
  {
    path: 'ui-color',
    component: UiColorComponent,
  },
  {
    path: 'widget/widget-basic',
    component: WidgetBasicComponent,
    data: {routeName: 'widget.widget-basic', pageTitle:'Widget Basic'}
  },
  {
    path: 'widget/widget-chart',
    component: WidgetChartComponent,
    data: {routeName: 'widget.widget-chart', pageTitle:'Widget Basic'}
  },
  {
    path: 'widget/widget-card',
    component: WidgetCardComponent,
    data: {routeName: 'widget.widget-card', pageTitle:'Widget Basic'}
  },
  {
    path: 'form/elements',
    component: ElementsComponent,
    data: {routeName: 'form.elements', pageTitle:'Elements'}

  },
  {
    path: 'form/wizard',
    component: WizardComponent,
    data: {routeName: 'form.wizard', pageTitle:'Wizard'}

  },
  {
    path: 'form/validation',
    component:ValidationComponent,
    data: {routeName: 'form.validation', pageTitle:'Validation'}
  },
  {
    path: 'map/google',
    component:GoogleComponent,
    data: {routeName: 'map.google', pageTitle:'Google'}
  },
  {
    path: 'map/vector',
    component:VectorComponent,
    data: {routeName: 'map.vector', pageTitle:'Google'}
  },
  {
    path: 'table/bootstrap-table',
    component:BootstrapTableComponent,
    data: {routeName: 'table.bootstrap-table', pageTitle:'bootstraptable' }
  },

  {
    path: 'table/border-table',
    component:BorderTableComponent,
    data: {routeName: 'table.border-table', pageTitle:'bootstraptable' }
  },

  {
    path: 'table/fancy-table',
    component:FancyTableComponent,
    data: {routeName: 'table.fancy-table', pageTitle:'bootstraptable' }
  },

  {
    path: 'table/fixed-table',
    component:FixedTableComponent,
    data: {routeName: 'table.fixed-table', pageTitle:'bootstraptable' }
  },

  {
    path: 'blank-page',
    component:BlankPageComponent,
  },

  {
    path: 'admin',
    component:AdminComponent,
  },
  {
    path: 'icons/solid',
    component:SolidComponent,
    data: {routeName: 'icons.solid', pageTitle:'Solid'}
  },
  {
    path: 'icons/outlined',
    component:OutlinedComponent,
    data: {routeName: 'icons.outlined', pageTitle:'Outlined' }
  },
  {
    path: 'icons/dual-tone',
    component:DualToneComponent,
    data: {routeName: 'icons.dual-tone', pageTitle:'Dual Tone'}
  },
  {
    path: 'analytics-dashboard',
    component:AnalyticsDashboardComponent,
    data: {routeName: 'analytics-dashboard', pageTitle:'Tableau de bord'}
  },
  {
    path: 'crypto-dashboard',
    component:CryptoDashboardComponent,
    data: {routeName: 'crypto-dashboard', pageTitle:'Crypto'}
  },
  {
    path: 'ui-elements/ui-avatars',
    component:UiAvatarsComponent,
    data: {routeName: 'ui-elements.ui-avatars', pageTitle:'Avatars'}
  },
  {
    path: 'ui-elements/ui-alerts',
    component:UiAlertsComponent,
    data: {routeName: 'ui-elements.ui-alert', pageTitle:'Alert'}
  },
  {
    path: 'ui-elements/ui-badges',
    component:UiBadgesComponent,
    data: {routeName: 'ui-elements.ui-badges', pageTitle:'Badges'}
  },
  {
    path: 'ui-elements/ui-breadcrumb',
    component:UiBreadcrumbComponent,
    data: {routeName: 'ui-elements.ui-breadcrumb', pageTitle:'Breadcrumb'}
  },
  {
    path: 'ui-elements/ ui-buttons',
    component:UiButtonsComponent,
    data: {routeName: 'ui-elements.ui-buttons', pageTitle:'Buttons'}
  },
  {
    path: 'ui-elements/ui-buttons-group',
    component:UiButtonsGroupComponent,
    data: {routeName: 'ui-elements.ui-buttons-group', pageTitle:'ButtonsGroup'}
  },
  {
    path: 'ui-elements/ui-offcanvas',
    component:UiOffcanvasComponent,
    data: {routeName: 'ui-elements.ui-offcanvas', pageTitle:'Offcanvas'}
  },
  {
    path: 'ui-elements/ui-colors',
    component:UiColorsComponent,
    data: {routeName: 'ui-elements.ui-colors', pageTitle:'Colors'}
  },
  {
    path: 'ui-elements/ui-cards',
    component:UiCardsComponent,
    data: {routeName: 'ui-elements.ui-cards', pageTitle:'Cards'}
  },
  {
    path: 'ui-elements/ui-carousel',
    component:UiCarouselComponent,
    data: {routeName: 'ui-elements.ui-cards', pageTitle:'Carousel'}
  },
  {
    path: 'ui-elements/ui-grid',
    component:UiGridComponent,
    data: {routeName: 'ui-elements.ui-cards', pageTitle:'Grid'}
  },
  {
    path: 'ui-elements/ui-images',
    component:UiImagesComponent,
    data: {routeName: 'ui-elements.ui-images', pageTitle:'Images'}
  },
  {
    path: 'ui-elements/ui-list-group',
    component:UiListGroupComponent,
    data: {routeName: 'ui-elements.ui-list-group', pageTitle:'Group'}
  },
  {
    path: 'ui-elements/ui-modal',
    component:UiModalComponent,
    data: {routeName: 'ui-elements.ui-cards', pageTitle:'Modal'}
  },
  {
    path: 'ui-elements/ui-notifications',
    component:UiNotificationsComponent,
    data: {routeName: 'ui-elements.ui-cards', pageTitle:'Notifications'}
  },
  {
    path: 'ui-elements/ui-pagination',
    component:UiPaginationComponent,
    data: {routeName: 'ui-elements.ui-cards', pageTitle:'pagination'}
  },
  {
    path: 'ui-elements/ui-popovers',
    component:UiPopoversComponent,
    data: {routeName: 'ui-elements.ui-popovers', pageTitle:'Popovers'}
  },
  {
    path: 'ui-elements/ui-typography',
    component:UiTypographyComponent,
    data: {routeName: 'ui-elements.ui-typography', pageTitle:'Typography'}
  },
  {
    path: 'ui-elements/ui-tabs',
    component:UiTabsComponent,
    data: {routeName: 'ui-elements.ui-tabs', pageTitle:'Tabs'}
  },
  {
    path: 'ui-elements/ui-tooltips',
    component:UiTooltipsComponent,
    data: {routeName: 'ui-elements.ui-tooltips', pageTitle:'Tooltips'}
  },
  {
    path: 'ui-elements/ui-embed-video',
    component:UiEmbedVideoComponent,
    data: {routeName: 'ui-elements.embed-video', pageTitle:'Video'}
  },
  
  {
    path: 'demandes/create-demande',
    component:CreateDemandeComponent,
    data: {routeName: 'demandes.create-demande', pageTitle:'Creation demande'}
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
