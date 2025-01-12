import {Context} from '../../core/context';
import {IPropertyIdentValueDescriptor, PropertyDescriptorParsingType} from '../IPropertyDescriptor';
export const enum IMG_REN {
    AUTO = 'auto',
    SMOOTH = 'smooth',
    CRISP_EDGES = 'crisp-edges',
    PIXELATED = 'pixelated'
}

export const imageRendering: IPropertyIdentValueDescriptor<IMG_REN> = {
    name: 'image-rendering',
    initialValue: 'auto',
    prefix: false,
    type: PropertyDescriptorParsingType.IDENT_VALUE,
    parse: (_context: Context, overflow: string) => {
        switch (overflow) {
            case 'smooth':
                return IMG_REN.SMOOTH;
            case 'crisp-edges':
                return IMG_REN.CRISP_EDGES;
            case 'pixelated':
                return IMG_REN.PIXELATED;
            case 'auto':
            default:
                return IMG_REN.AUTO;
        }
    }
};
