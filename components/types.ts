import type { ExtractPropTypes } from 'vue';
import type Button from './Button.vue';
import type ThTypography from './ThTypography.vue';
import type ThImages from './ThImages.vue';

export type ButtonProps = ExtractPropTypes<typeof Button.props>;
export type ThTypographyProps = ExtractPropTypes<typeof ThTypography.props>;
export type ThImagesProps = ExtractPropTypes<typeof ThImages.props>;
