import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppTopBarComponent } from './app.topbar.component';
import { AppSidebarComponent } from './app.sidebar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppConfigModule } from './config/config.module';
import { AppLayoutComponent } from './app.layout.component';
import { AppBreadcrumbComponent } from './app.breadcrumb.component';
import { StyleClassModule } from 'primeng/styleclass';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppSidebarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppLayoutComponent,
        AppBreadcrumbComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        InputSwitchModule,
        MenuModule,
        RouterModule,
        DropdownModule,
        SidebarModule,
        StyleClassModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        TooltipModule,
        AppConfigModule
    ],
    exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
