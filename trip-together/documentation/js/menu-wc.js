'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">trip-together documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-b79a6a8847ebea199a1c5e64b689b856ff5ef35a39e022ac519880880028ec08b791fb10b725405e2ea8087f4d27915438e99a16f1897a78ecbd7b42d6d6376d"' : 'data-bs-target="#xs-components-links-module-AppModule-b79a6a8847ebea199a1c5e64b689b856ff5ef35a39e022ac519880880028ec08b791fb10b725405e2ea8087f4d27915438e99a16f1897a78ecbd7b42d6d6376d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b79a6a8847ebea199a1c5e64b689b856ff5ef35a39e022ac519880880028ec08b791fb10b725405e2ea8087f4d27915438e99a16f1897a78ecbd7b42d6d6376d"' :
                                            'id="xs-components-links-module-AppModule-b79a6a8847ebea199a1c5e64b689b856ff5ef35a39e022ac519880880028ec08b791fb10b725405e2ea8087f4d27915438e99a16f1897a78ecbd7b42d6d6376d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthenticateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-4e3d9e761c42d090c41c673195ce4884b1c67a61d68c745d949fe5ba76368e55cef8e5258e3800d75fc4709363c6b49ab0475ff2137147ad8c0bcba21c2feca8"' : 'data-bs-target="#xs-components-links-module-AuthModule-4e3d9e761c42d090c41c673195ce4884b1c67a61d68c745d949fe5ba76368e55cef8e5258e3800d75fc4709363c6b49ab0475ff2137147ad8c0bcba21c2feca8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-4e3d9e761c42d090c41c673195ce4884b1c67a61d68c745d949fe5ba76368e55cef8e5258e3800d75fc4709363c6b49ab0475ff2137147ad8c0bcba21c2feca8"' :
                                            'id="xs-components-links-module-AuthModule-4e3d9e761c42d090c41c673195ce4884b1c67a61d68c745d949fe5ba76368e55cef8e5258e3800d75fc4709363c6b49ab0475ff2137147ad8c0bcba21c2feca8"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CoreModule-ea7bd451223f1de2e5744607c731afdc580e1a9aa95cc799f1f199c1e8988692c5f896efe2fa3516d0c7d1d8fb07e2c489131175e96c7f1979c20230b02f992b"' : 'data-bs-target="#xs-components-links-module-CoreModule-ea7bd451223f1de2e5744607c731afdc580e1a9aa95cc799f1f199c1e8988692c5f896efe2fa3516d0c7d1d8fb07e2c489131175e96c7f1979c20230b02f992b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-ea7bd451223f1de2e5744607c731afdc580e1a9aa95cc799f1f199c1e8988692c5f896efe2fa3516d0c7d1d8fb07e2c489131175e96c7f1979c20230b02f992b"' :
                                            'id="xs-components-links-module-CoreModule-ea7bd451223f1de2e5744607c731afdc580e1a9aa95cc799f1f199c1e8988692c5f896efe2fa3516d0c7d1d8fb07e2c489131175e96c7f1979c20230b02f992b"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeaturesModule.html" data-type="entity-link" >FeaturesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FeaturesModule-f8bd9f2363e538c6a4effa2a83ca04774fd9cca378c36e4724ef500fca76950bd32569ea1faa98d18cca9e53b68097c380304b0d2cce5d950bebb1e5dd791dd3"' : 'data-bs-target="#xs-components-links-module-FeaturesModule-f8bd9f2363e538c6a4effa2a83ca04774fd9cca378c36e4724ef500fca76950bd32569ea1faa98d18cca9e53b68097c380304b0d2cce5d950bebb1e5dd791dd3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeaturesModule-f8bd9f2363e538c6a4effa2a83ca04774fd9cca378c36e4724ef500fca76950bd32569ea1faa98d18cca9e53b68097c380304b0d2cce5d950bebb1e5dd791dd3"' :
                                            'id="xs-components-links-module-FeaturesModule-f8bd9f2363e538c6a4effa2a83ca04774fd9cca378c36e4724ef500fca76950bd32569ea1faa98d18cca9e53b68097c380304b0d2cce5d950bebb1e5dd791dd3"' }>
                                            <li class="link">
                                                <a href="components/CatalogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatalogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WeatherComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WeatherComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-9049c709cfdd64744a2b17e78d977a69ddce113d6884a31cbc6b43d874638ebf1edf81aff1407fb1ed78debf7ee08ecb42bff4fe0f2cfbc88daef72910e2badf"' : 'data-bs-target="#xs-components-links-module-SharedModule-9049c709cfdd64744a2b17e78d977a69ddce113d6884a31cbc6b43d874638ebf1edf81aff1407fb1ed78debf7ee08ecb42bff4fe0f2cfbc88daef72910e2badf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-9049c709cfdd64744a2b17e78d977a69ddce113d6884a31cbc6b43d874638ebf1edf81aff1407fb1ed78debf7ee08ecb42bff4fe0f2cfbc88daef72910e2badf"' :
                                            'id="xs-components-links-module-SharedModule-9049c709cfdd64744a2b17e78d977a69ddce113d6884a31cbc6b43d874638ebf1edf81aff1407fb1ed78debf7ee08ecb42bff4fe0f2cfbc88daef72910e2badf"' }>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SharedModule-9049c709cfdd64744a2b17e78d977a69ddce113d6884a31cbc6b43d874638ebf1edf81aff1407fb1ed78debf7ee08ecb42bff4fe0f2cfbc88daef72910e2badf"' : 'data-bs-target="#xs-pipes-links-module-SharedModule-9049c709cfdd64744a2b17e78d977a69ddce113d6884a31cbc6b43d874638ebf1edf81aff1407fb1ed78debf7ee08ecb42bff4fe0f2cfbc88daef72910e2badf"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-9049c709cfdd64744a2b17e78d977a69ddce113d6884a31cbc6b43d874638ebf1edf81aff1407fb1ed78debf7ee08ecb42bff4fe0f2cfbc88daef72910e2badf"' :
                                            'id="xs-pipes-links-module-SharedModule-9049c709cfdd64744a2b17e78d977a69ddce113d6884a31cbc6b43d874638ebf1edf81aff1407fb1ed78debf7ee08ecb42bff4fe0f2cfbc88daef72910e2badf"' }>
                                            <li class="link">
                                                <a href="pipes/TempConvertorPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TempConvertorPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/tripRoutingModule.html" data-type="entity-link" >tripRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorService.html" data-type="entity-link" >ErrorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TripService.html" data-type="entity-link" >TripService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AppInterceptor.html" data-type="entity-link" >AppInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthActivate.html" data-type="entity-link" >AuthActivate</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Clouds.html" data-type="entity-link" >Clouds</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Coord.html" data-type="entity-link" >Coord</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Main.html" data-type="entity-link" >Main</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Profile.html" data-type="entity-link" >Profile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sys.html" data-type="entity-link" >Sys</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Trip.html" data-type="entity-link" >Trip</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Weather.html" data-type="entity-link" >Weather</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WeatherData.html" data-type="entity-link" >WeatherData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Wind.html" data-type="entity-link" >Wind</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});