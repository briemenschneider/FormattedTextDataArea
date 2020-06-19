import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var formattedTextDataAreaB47E019733B04383B9E1AF9E1425C85E_DEBUG: IVisualPlugin = {
    name: 'formattedTextDataAreaB47E019733B04383B9E1AF9E1425C85E_DEBUG',
    displayName: 'FormattedTextDataArea',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["formattedTextDataAreaB47E019733B04383B9E1AF9E1425C85E_DEBUG"] = formattedTextDataAreaB47E019733B04383B9E1AF9E1425C85E_DEBUG;
}

export default formattedTextDataAreaB47E019733B04383B9E1AF9E1425C85E_DEBUG;