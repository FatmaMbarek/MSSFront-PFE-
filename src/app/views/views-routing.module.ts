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
import { AuthGuard } from './shared/auth.guard';
import { ExtraitComponent } from './mabanque/extrait/extrait.component';
import { RibibanComponent } from './mabanque/ribiban/ribiban.component';
const routes: Routes = [
  // Component Routes
  {
    path: 'dashboard',
    component: AnalyticsDashboardComponent,
    canActivate: [AuthGuard], // Protect this route

    data: {routeName: 'default.dashboard', pageTitle:'Tableau de bord'}
  },

  {
    path: 'projets/projet-list',
    component: ProjetListComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'projets.projet-list', pageTitle:'Liste Projets'}
  },
  {
    path: 'extrait',
    component: ExtraitComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'projets.extarit', pageTitle:'Extrait de compte'}
  },
  {
    path: 'rib-iban',
    component: RibibanComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'projets.rib-iban', pageTitle:'RIB IBAN'}
  },
  {
    path: 'projets/projet-add',
    component: ProjetAddComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'projets.projet-add', pageTitle:'Ajouter Projet'}
  },
  {
    path: 'projets/projet-details',
    component: ProjetDetailsComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'projets.projet-details', pageTitle:'Details Projet'}
  },
  {
    path: 'actions/action-list',
    component: ActionListComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'actions.action-list', pageTitle:'List Actions'}
  },
  {
    path: 'actions/action-add',
    component: ActionAddComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'actions.action-add', pageTitle:'Ajouter Action'}
  },
  {
    path: 'actions/action-details',
    component: ActionDetailsComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'actions.action-details', pageTitle:'Details Action'}
  },
  {
    path: 'encaissement',
    component: EncaissementArgentComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'consultation.encaissement', pageTitle:'encaissement'}
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'home.subscription', pageTitle:'subscription'}
  },
  {
    path: 'solde',
    component: SoldeComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'consultation.solde', pageTitle:'solde'}
  },
  {
    path: 'special-pages/billing',
    component: BillingComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'special-pages.billing', pageTitle: 'Billing' }
  },
  {
    path: 'special-pages/calender',
    component: CalenderComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'special-pages.calender', pageTitle: 'Calender' }
  },
  {
    path: 'special-pages/kanban',
    component: KanbanComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'special-pages.kanban', pageTitle: 'Kanban' }
  },
  {
    path: 'special-pages/pricing',
    component: PricingComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'special-pages.pricing', pageTitle: 'Pricing' }
  },
  {
    path: 'special-pages/timeline',
    component: TimelineComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'special-pages.timeline', pageTitle: 'Pricing' }
  },
  {
    path: 'users/user-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'users.user-profile', pageTitle: 'User' }
  },
  {
    path: 'users/user-add',
    component: UserAddComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'users.user-add', pageTitle: 'Ajouter User' }
  },
  {
    path: 'users/user-list',
    component: UserListComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'users.user-list', pageTitle: 'List Users ' }
  },
  {
    path: 'plugins/apexchart',
    component: ApexchartComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'plugins.apexchart', pageTitle: 'Apexchart' }
  },
  {
    path: 'plugins/button-hover',
    component: ButtonHoverComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'plugins.button-hover', pageTitle: 'Button Hover' }
  },
  {
    path: 'plugins/choise-js',
    component: ChoiseJsComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'plugins.choise-js', pageTitle: 'Choise Js' }
  },
  {
    path: 'plugins/flatpickr',
    component: FlatpickrComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'plugins.flatpicker', pageTitle: 'Flatpicker' }
  },
  {
    path: 'plugins/fslightbox',
    component: FslightboxComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'plugins.fslightbox', pageTitle: 'Fslightbox' }
  },
  {
    path: 'plugins/gallery',
    component: GalleryComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'plugins.gallery', pageTitle: 'Gallery' }
  },
  {
    path: 'plugins/image',
    component: ImageComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'plugins.image', pageTitle: 'Image' }
  },
  {
    path: 'plugins/loader',
    component: LoaderComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'plugins.loader', pageTitle: 'Loader' }
  },
  {
    path: 'plugins/rating',
    component: RatingComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'plugins.rating', pageTitle: 'Rating' }
  },
  {
    path: 'plugins/select2',
    component: Select2Component,
    canActivate: [AuthGuard],
    data: { routeName: 'plugins.select2', pageTitle: 'Select2' }
  },
  {
    path: 'plugins/sweet-alert',
    component: SweetAlertComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'plugins.sweet-alert', pageTitle: 'Sweet Alert' }
  },
  {
    path: 'plugins/quill-editor',
    component: QuillEditorComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'plugins.quill-editor', pageTitle: 'Quill Editor' }
  },
  {
    path: 'plugins/uppy',
    component: UppyComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'plugins.uppy', pageTitle: 'Uppy' }
  },
  {
    path: 'ui-color',
    component: UiColorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'widget/widget-basic',
    component: WidgetBasicComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'widget.widget-basic', pageTitle: 'Widget Basic' }
  },
  {
    path: 'widget/widget-chart',
    component: WidgetChartComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'widget.widget-chart', pageTitle: 'Widget Basic' }
  },
  {
    path: 'widget/widget-card',
    component: WidgetCardComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'widget.widget-card', pageTitle: 'Widget Basic' }
  },
  {
    path: 'form/elements',
    component: ElementsComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'form.elements', pageTitle: 'Elements' }
  },
  {
    path: 'form/wizard',
    component: WizardComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'form.wizard', pageTitle: 'Wizard' }
  },
  {
    path: 'form/validation',
    component: ValidationComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'form.validation', pageTitle: 'Validation' }
  },
  {
    path: 'map/google',
    component: GoogleComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'map.google', pageTitle: 'Google' }
  },
  {
    path: 'map/vector',
    component: VectorComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'map.vector', pageTitle: 'Google' }
  },
  {
    path: 'table/bootstrap-table',
    component: BootstrapTableComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'table.bootstrap-table', pageTitle: 'bootstraptable' }
  },
  {
    path: 'table/border-table',
    component: BorderTableComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'table.border-table', pageTitle: 'bootstraptable' }
  },
  {
    path: 'table/fancy-table',
    component: FancyTableComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'table.fancy-table', pageTitle: 'bootstraptable' }
  },
  {
    path: 'table/fixed-table',
    component: FixedTableComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'table.fixed-table', pageTitle: 'bootstraptable' }
  },
  {
    path: 'blank-page',
    component: BlankPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'icons/solid',
    component: SolidComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'icons.solid', pageTitle: 'Solid' }
  },
  {
    path: 'icons/outlined',
    component: OutlinedComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'icons.outlined', pageTitle: 'Outlined' }
  },
  {
    path: 'icons/dual-tone',
    component: DualToneComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'icons.dual-tone', pageTitle: 'Dual Tone' }
  },
  {
    path: 'analytics-dashboard',
    component: AnalyticsDashboardComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'analytics-dashboard', pageTitle: 'Tableau de bord' }
  },
  {
    path: 'crypto-dashboard',
    component: CryptoDashboardComponent,
    canActivate: [AuthGuard],
    data: { routeName: 'crypto-dashboard', pageTitle: 'Crypto' }
  },
  {
    path: 'ui-elements/ui-avatars',
    component:UiAvatarsComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-avatars', pageTitle:'Avatars'}
  },
  {
    path: 'ui-elements/ui-alerts',
    component:UiAlertsComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-alert', pageTitle:'Alert'}
  },
  {
    path: 'ui-elements/ui-badges',
    component:UiBadgesComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-badges', pageTitle:'Badges'}
  },
  {
    path: 'ui-elements/ui-breadcrumb',
    component:UiBreadcrumbComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-breadcrumb', pageTitle:'Breadcrumb'}
  },
  {
    path: 'ui-elements/ ui-buttons',
    component:UiButtonsComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-buttons', pageTitle:'Buttons'}
  },
  {
    path: 'ui-elements/ui-buttons-group',
    component:UiButtonsGroupComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-buttons-group', pageTitle:'ButtonsGroup'}
  },
  {
    path: 'ui-elements/ui-offcanvas',
    component:UiOffcanvasComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-offcanvas', pageTitle:'Offcanvas'}
  },
  {
    path: 'ui-elements/ui-colors',
    component:UiColorsComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-colors', pageTitle:'Colors'}
  },
  {
    path: 'ui-elements/ui-cards',
    component:UiCardsComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-cards', pageTitle:'Cards'}
  },
  {
    path: 'ui-elements/ui-carousel',
    component:UiCarouselComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-cards', pageTitle:'Carousel'}
  },
  {
    path: 'ui-elements/ui-grid',
    component:UiGridComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-cards', pageTitle:'Grid'}
  },
  {
    path: 'ui-elements/ui-images',
    component:UiImagesComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-images', pageTitle:'Images'}
  },
  {
    path: 'ui-elements/ui-list-group',
    component:UiListGroupComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-list-group', pageTitle:'Group'}
  },
  {
    path: 'ui-elements/ui-modal',
    component:UiModalComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-cards', pageTitle:'Modal'}
  },
  {
    path: 'ui-elements/ui-notifications',
    component:UiNotificationsComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-cards', pageTitle:'Notifications'}
  },
  {
    path: 'ui-elements/ui-pagination',
    component:UiPaginationComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-cards', pageTitle:'pagination'}
  },
  {
    path: 'ui-elements/ui-popovers',
    component:UiPopoversComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-popovers', pageTitle:'Popovers'}
  },
  {
    path: 'ui-elements/ui-typography',
    component:UiTypographyComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-typography', pageTitle:'Typography'}
  },
  {
    path: 'ui-elements/ui-tabs',
    component:UiTabsComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-tabs', pageTitle:'Tabs'}
  },
  {
    path: 'ui-elements/ui-tooltips',
    component:UiTooltipsComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.ui-tooltips', pageTitle:'Tooltips'}
  },
  {
    path: 'ui-elements/ui-embed-video',
    component:UiEmbedVideoComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'ui-elements.embed-video', pageTitle:'Video'}
  },
  
  {
    path: 'demandes/create-demande',
    component:CreateDemandeComponent,
    canActivate: [AuthGuard],
    data: {routeName: 'demandes.create-demande', pageTitle:'Creation demande'}
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
