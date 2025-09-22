export declare class AppRoot {
    private intro;
    private circles;
    private logo;
    private cvbg;
    private about;
    private skills;
    private history;
    private historyh3;
    private historyh5;
    private historyh6;
    private historyDivider;
    private future;
    private socials;
    private skillstab1;
    private skillstab2;
    private skillstab3;
    private footer;
    el: HTMLDivElement;
    hideJourney(): void;
    launchCV(): void;
    playBiography(): void;
    playResponsibilities(): void;
    playStack(): void;
    playFuture(): void;
    dateHandler(past: any): string;
    render(): any;
    componentDidLoad(): void;
}
