// Core Modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Plugin Modules
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from "ng-apexcharts";
import { CountUpModule } from 'ngx-countup';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// import { AppointmentModule } from '../components/modules/appointment/appointment.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { SwiperModule } from "swiper/angular";
import { BarRatingModule } from 'ngx-bar-rating';
import { NgDragDropModule } from 'ng-drag-drop';






FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])


// Components
import { DashboardComponent } from './dashboard/dashboard.component';

// Modules
import { ViewsRoutingModule } from './views-routing.module';
import { QompacUiModule } from '../components/qompac-ui/qompac-ui.module';
import { CalenderComponent } from './special-page/calender/calender.component';
import { KanbanComponent } from './special-page/kanban/kanban.component';
import { PricingComponent } from './special-page/pricing/pricing.component';
import { TimelineComponent } from './special-page/timeline/timeline.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { Error404Component } from './utilities/error404/error404.component';
import { Error500Component } from './utilities/error500/error500.component';
import { MaintenanceComponent } from './utilities/maintenance/maintenance.component';
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
import { IndexHorizontalComponent } from './index-horizontal/index-horizontal.component';
import { IndexDualCompactComponent } from './index-dual-compact/index-dual-compact.component';
import { IndexBoxedComponent } from './index-boxed/index-boxed.component';
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
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ConfirmMailComponent } from './auth/confirm-mail/confirm-mail.component';
import { LockScreenComponent } from './auth/lock-screen/lock-screen.component';
import { RecoverPasswordComponent } from './auth/recover-password/recover-password.component';
import { TwoFactorComponent } from './auth/two-factor/two-factor.component';
import { AccountDeactivateComponent } from './auth/account-deactivate/account-deactivate.component';
import { ProjetListComponent } from './projets/projet-list/projet-list.component';
import { ProjetAddComponent } from './projets/projet-add/projet-add.component';
import { ProjetDetailsComponent } from './projets/projet-details/projet-details.component';
import { ActionListComponent } from './actions/action-list/action-list.component';
import { ActionAddComponent } from './actions/action-add/action-add.component';
import { ActionDetailsComponent } from './actions/action-details/action-details.component';
import { CreateDemandeComponent } from './demandes/create-demande/create-demande.component';
import { ConsultationDemandeComponent } from './demandes/consultation-demande/consultation-demande.component';

@NgModule({
  declarations: [
    DashboardComponent,
    WidgetBasicComponent,
    WidgetChartComponent,
    WidgetCardComponent,
    CalenderComponent,
    KanbanComponent,
    PricingComponent,
    TimelineComponent,
    UserProfileComponent,
    UserAddComponent,
    UserListComponent,
    Error404Component,
    Error500Component,
    MaintenanceComponent,
    ApexchartComponent,
    ButtonHoverComponent,
    ChoiseJsComponent,
    FlatpickrComponent,
    FslightboxComponent,
    GalleryComponent,
    ImageComponent,
    LoaderComponent,
    RatingComponent,
    Select2Component,
    SweetAlertComponent,
    QuillEditorComponent,
    UppyComponent,
    UiColorComponent,
    ElementsComponent,
    WizardComponent,
    ValidationComponent,
    GoogleComponent,
    VectorComponent,
    BootstrapTableComponent,
    BorderTableComponent,
    FancyTableComponent,
    FixedTableComponent,
    BlankPageComponent,
    AdminComponent,
    SolidComponent,
    OutlinedComponent,
    DualToneComponent,
    IndexHorizontalComponent,
    IndexDualCompactComponent,
    IndexBoxedComponent,
    AnalyticsDashboardComponent,
    CryptoDashboardComponent,
    UiAvatarsComponent,
    UiAlertsComponent,
    UiBadgesComponent,
    UiBreadcrumbComponent,
    UiButtonsComponent,
    UiButtonsGroupComponent,
    UiOffcanvasComponent,
    UiColorsComponent,
    UiCardsComponent,
    UiCarouselComponent,
    UiGridComponent,
    UiImagesComponent,
    UiListGroupComponent,
    UiModalComponent,
    UiNotificationsComponent,
    UiPaginationComponent,
    UiPopoversComponent,
    UiTypographyComponent,
    UiTabsComponent,
    UiTooltipsComponent,
    UiEmbedVideoComponent,
    BillingComponent,
    SignInComponent,
    SignUpComponent,
    ConfirmMailComponent,
    LockScreenComponent,
    RecoverPasswordComponent,
    TwoFactorComponent,
    AccountDeactivateComponent,
    ProjetListComponent,
    ProjetAddComponent,
    ProjetDetailsComponent,
    ActionListComponent,
    ActionAddComponent,
    ActionDetailsComponent,
    CreateDemandeComponent,
    ConsultationDemandeComponent,





  ],
  imports: [
    CommonModule,
    QompacUiModule,
    NgbModule,
    NgApexchartsModule,
    ViewsRoutingModule,
    FormsModule,
    Ng2FlatpickrModule,
    CountUpModule,
    Ng2SearchPipeModule,
    // AppointmentModule,
    FullCalendarModule,
    SwiperModule,
    BarRatingModule,
    NgDragDropModule.forRoot()
  ],
  exports: [
    DashboardComponent,
    WidgetBasicComponent,
    WidgetChartComponent,
    WidgetCardComponent,
    QompacUiModule,
    CalenderComponent,
    KanbanComponent,
    PricingComponent,
    TimelineComponent,
    UserProfileComponent,
    UserAddComponent,
    UserListComponent,
    Error404Component,
    Error500Component,
    MaintenanceComponent,
    ApexchartComponent,
    ButtonHoverComponent,
    ChoiseJsComponent,
    FlatpickrComponent,
    FslightboxComponent,
    GalleryComponent,
    ImageComponent,
    LoaderComponent,
    RatingComponent,
    Select2Component,
    SweetAlertComponent,
    QuillEditorComponent,
    UppyComponent,
    UiColorComponent,
    ElementsComponent,
    WizardComponent,
    ValidationComponent,
    GoogleComponent,
    VectorComponent,
    BootstrapTableComponent,
    BorderTableComponent,
    FancyTableComponent,
    FixedTableComponent,
    BlankPageComponent,
    AdminComponent,
    SolidComponent,
    OutlinedComponent,
    DualToneComponent,
    IndexHorizontalComponent,
    IndexDualCompactComponent,
    IndexBoxedComponent,
    AnalyticsDashboardComponent,
    CryptoDashboardComponent,
    UiAvatarsComponent,
    UiAlertsComponent,
    UiBadgesComponent,
    UiBreadcrumbComponent,
    UiButtonsComponent,
    UiButtonsGroupComponent,
    UiOffcanvasComponent,
    UiColorsComponent,
    UiCardsComponent,
    UiCarouselComponent,
    UiGridComponent,
    UiImagesComponent,
    UiListGroupComponent,
    UiModalComponent,
    UiNotificationsComponent,
    UiPaginationComponent,
    UiPopoversComponent,
    UiTypographyComponent,
    UiTabsComponent,
    UiTooltipsComponent,
    UiEmbedVideoComponent,
    BillingComponent,
    SignInComponent,
    SignUpComponent,
    ConfirmMailComponent,
    LockScreenComponent,
    RecoverPasswordComponent,
    TwoFactorComponent,
    AccountDeactivateComponent,
    ProjetListComponent,
    ProjetAddComponent,
    ProjetDetailsComponent,
    ActionListComponent,
    ActionAddComponent,
    ActionDetailsComponent,




  ]
})
export class ViewsModule { }
