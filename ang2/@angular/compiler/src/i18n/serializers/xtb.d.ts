import * as i18n from '../i18n_ast';
import { PlaceholderMapper, Serializer } from './serializer';
export declare class Xtb extends Serializer {
    write(messages: i18n.Message[]): string;
    load(content: string, url: string): {
        [msgId: string]: i18n.Node[];
    };
    digest(message: i18n.Message): string;
    createNameMapper(message: i18n.Message): PlaceholderMapper;
}
