import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Site configuration
 *
 *
 */
export interface SiteConfig extends SanityDocument {
  _type: "siteConfig";

  /**
   * Site logo light — `image`
   *
   *
   */
  logoLight?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Site logo dark — `image`
   *
   *
   */
  logoDark?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Favicon — `image`
   *
   *
   */
  favicon?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Menu — `object`
   *
   *
   */
  menu?: {
    _type: "menu";
    /**
     * Norsk — `array`
     *
     *
     */
    no?: Array<
      SanityKeyedReference<
        | Page
        | Article
        | Bankruptcy
        | Person
        | Competence
        | HomePage
        | BankruptcyArchive
        | CompetenceArchive
        | PeopleArchive
        | ArticleArchive
      >
    >;

    /**
     * English — `array`
     *
     *
     */
    en?: Array<
      SanityKeyedReference<
        | Page
        | Article
        | Bankruptcy
        | Person
        | Competence
        | HomePage
        | BankruptcyArchive
        | CompetenceArchive
        | PeopleArchive
        | ArticleArchive
      >
    >;
  };
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * [object Object] — `string`
   *
   *
   */
  title?: string;

  /**
   * [object Object] — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Heading — `string`
   *
   * Overwrite title for the page top
   */
  heading?: string;

  /**
   * Show Hero — `boolean`
   *
   *
   */
  showHero?: boolean;

  /**
   * Hero Image — `figure`
   *
   *
   */
  heroImage?: Figure;

  /**
   * Intro Text — `text`
   *
   *
   */
  introText?: string;

  /**
   * Template — `string`
   *
   *
   */
  template?: "simple" | "blocks";

  /**
   * Content — `portableText`
   *
   *
   */
  content?: PortableText;

  /**
   * Blocks — `blocks`
   *
   *
   */
  blocks?: Blocks;

  /**
   * Seo — `seo`
   *
   * Overwrite default SEO settings
   */
  seo?: Seo;
}

/**
 * Default SEO / Share
 *
 *
 */
export interface SeoConfig extends SanityDocument {
  _type: "seoConfig";

  /**
   * Standard meta title — `object`
   *
   * Fallback meta title when not specified or inherited by pages
   */
  metaTitle?: {
    _type: "metaTitle";
    /**
     * Norsk — `string`
     *
     *
     */
    no?: string;

    /**
     * English — `string`
     *
     *
     */
    en?: string;
  };

  /**
   * Standard meta description — `object`
   *
   * Fallback meta description when not specified on inherited by pages
   */
  metaDesc?: {
    _type: "metaDesc";
    /**
     * Norsk — `text`
     *
     *
     */
    no?: string;

    /**
     * English — `text`
     *
     *
     */
    en?: string;
  };

  /**
   * Standard meta image — `figure`
   *
   * Fallback meta image when not specified
   */
  shareGraphic?: Figure;

  /**
   * Meta Title Ending — `object`
   *
   * Ending of meta title. Ie. Ro Sommernes becomes : Front page – Ro sommernes
   */
  metaTitleEnding?: {
    _type: "metaTitleEnding";
    /**
     * Norsk — `string`
     *
     *
     */
    no?: string;

    /**
     * English — `string`
     *
     *
     */
    en?: string;
  };

  /**
   * Facebook App ID — `string`
   *
   *
   */
  facebookAppId?: string;
}

/**
 * Competence
 *
 *
 */
export interface Competence extends SanityDocument {
  _type: "competence";

  /**
   * [object Object] — `string`
   *
   *
   */
  title?: string;

  /**
   * [object Object] — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Intro Text — `text`
   *
   *
   */
  introText?: string;

  /**
   * Template — `string`
   *
   *
   */
  template?: "simple" | "blocks";

  /**
   * Content — `portableText`
   *
   *
   */
  content?: PortableText;

  /**
   * Blocks — `blocks`
   *
   *
   */
  blocks?: Blocks;

  /**
   * Seo — `seo`
   *
   * Overwrite default SEO settings
   */
  seo?: Seo;
}

/**
 * position
 *
 *
 */
export interface Position extends SanityDocument {
  _type: "position";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;
}

/**
 * auditor
 *
 *
 */
export interface Auditor extends SanityDocument {
  _type: "auditor";

  /**
   * [object Object] — `string`
   *
   *
   */
  requiredTitle?: string;
}

/**
 * court
 *
 *
 */
export interface Court extends SanityDocument {
  _type: "court";

  /**
   * [object Object] — `string`
   *
   *
   */
  requiredTitle?: string;
}

/**
 * person
 *
 *
 */
export interface Person extends SanityDocument {
  _type: "person";

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Inactive — `boolean`
   *
   * Keep resigned employees for references, ie. bankrupcies or articles
   */
  inactive?: boolean;

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Position — `reference`
   *
   *
   */
  position?: SanityReference<Position>;

  /**
   * Competences — `array`
   *
   *
   */
  competences?: Array<SanityKeyedReference<Competence>>;

  /**
   * Phone — `string`
   *
   * Use full phone number with formatting, i.e. +47 23 00 34 40
   */
  phone?: string;

  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Background — `localeText`
   *
   *
   */
  background?: LocaleText;

  /**
   * Expertise — `localeText`
   *
   *
   */
  expertise?: LocaleText;

  /**
   * Publications — `array`
   *
   *
   */
  publications?: Array<SanityKeyedReference<Publication>>;
}

/**
 * publication
 *
 *
 */
export interface Publication extends SanityDocument {
  _type: "publication";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Url — `url`
   *
   *
   */
  url?: string;

  /**
   * Publication Info — `string`
   *
   *
   */
  publicationInfo?: string;

  /**
   * Publication Type — `reference`
   *
   *
   */
  publicationType?: SanityReference<PublicationType>;
}

/**
 * publicationType
 *
 *
 */
export interface PublicationType extends SanityDocument {
  _type: "publicationType";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;
}

/**
 * Article
 *
 *
 */
export interface Article extends SanityDocument {
  _type: "article";

  /**
   * [object Object] — `string`
   *
   *
   */
  title?: string;

  /**
   * Publication Date — `datetime`
   *
   *
   */
  publicationDate?: string;

  /**
   * [object Object] — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Intro Text — `text`
   *
   *
   */
  introText?: string;

  /**
   * Content — `portableText`
   *
   *
   */
  content?: PortableText;

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Competence>>;

  /**
   * People — `array`
   *
   *
   */
  people?: Array<SanityKeyedReference<Person>>;

  /**
   * Seo — `seo`
   *
   * Overwrite default SEO settings
   */
  seo?: Seo;
}

/**
 * Bankruptcy
 *
 *
 */
export interface Bankruptcy extends SanityDocument {
  _type: "bankruptcy";

  /**
   * [object Object] — `string`
   *
   *
   */
  title?: string;

  /**
   * [object Object] — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Executive trustee — `reference`
   *
   *
   */
  trustee?: SanityReference<Person>;

  /**
   * Estate auditor — `reference`
   *
   *
   */
  auditor?: SanityReference<Auditor>;

  /**
   * Court — `reference`
   *
   *
   */
  court?: SanityReference<Court>;

  /**
   * Documents — `array`
   *
   *
   */
  documents?: Array<
    SanityKeyed<{
      _type: "documentFile";
      /**
       * Title — `string`
       *
       *
       */
      title?: string;

      /**
       * File — `file`
       *
       *
       */
      file?: { _type: "file"; asset: SanityReference<any> };
    }>
  >;

  /**
   * Case No — `string`
   *
   *
   */
  caseNo?: string;

  /**
   * Commencement of bankruptcy proceedings — `date`
   *
   *
   */
  commencementOfBankruptcyProceedings?: string;

  /**
   * Date of filing — `date`
   *
   *
   */
  dateOfFiling?: string;

  /**
   * Deadline for filing claims — `date`
   *
   *
   */
  deadlineForFilingClaims?: string;

  /**
   * First creditors' meeting — `date`
   *
   *
   */
  firstCreditorsMeeting?: string;
}

/**
 * contactConfig
 *
 *
 */
export interface ContactConfig extends SanityDocument {
  _type: "contactConfig";

  /**
   * Phone — `string`
   *
   *
   */
  phone?: string;

  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Fax — `string`
   *
   *
   */
  fax?: string;

  /**
   * Address — `geopoint`
   *
   *
   */
  address?: SanityGeoPoint;

  /**
   * Text address — `object`
   *
   *
   */
  portableTextAddress?: {
    _type: "portableTextAddress";
    /**
     * Norsk — `simplePortableText`
     *
     *
     */
    no?: SimplePortableText;

    /**
     * English — `simplePortableText`
     *
     *
     */
    en?: SimplePortableText;
  };

  /**
   * Org Number — `string`
   *
   *
   */
  orgNumber?: string;

  /**
   * Contact Links — `object`
   *
   *
   */
  contactLinks?: {
    _type: "contactLinks";
    /**
     * Norsk — `array`
     *
     *
     */
    no?: Array<
      SanityKeyedReference<
        | Page
        | Article
        | Bankruptcy
        | Person
        | Competence
        | HomePage
        | BankruptcyArchive
        | CompetenceArchive
        | PeopleArchive
        | ArticleArchive
      >
    >;

    /**
     * English — `array`
     *
     *
     */
    en?: Array<
      SanityKeyedReference<
        | Page
        | Article
        | Bankruptcy
        | Person
        | Competence
        | HomePage
        | BankruptcyArchive
        | CompetenceArchive
        | PeopleArchive
        | ArticleArchive
      >
    >;
  };
}

/**
 * Home page
 *
 *
 */
export interface HomePage extends SanityDocument {
  _type: "homePage";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Heading — `string`
   *
   * Page heading
   */
  heading?: string;

  /**
   * Hero Image — `figure`
   *
   *
   */
  heroImage?: Figure;

  /**
   * Buttons — `array`
   *
   *
   */
  buttons?: Array<
    SanityKeyedReference<
      | Page
      | Article
      | Bankruptcy
      | Person
      | Competence
      | HomePage
      | BankruptcyArchive
      | CompetenceArchive
      | PeopleArchive
      | ArticleArchive
    >
  >;

  /**
   * Blocks — `blocks`
   *
   *
   */
  blocks?: Blocks;

  /**
   * Seo — `seo`
   *
   * Overwrite default SEO settings
   */
  seo?: Seo;
}

/**
 * People archive
 *
 *
 */
export interface PeopleArchive extends SanityDocument {
  _type: "peopleArchive";

  /**
   * [object Object] — `string`
   *
   *
   */
  title?: string;

  /**
   * Intro Text — `simplePortableText`
   *
   *
   */
  introText?: SimplePortableText;

  /**
   * Search Placeholder — `string`
   *
   *
   */
  searchPlaceholder?: string;

  /**
   * Seo — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Article archive
 *
 *
 */
export interface ArticleArchive extends SanityDocument {
  _type: "articleArchive";

  /**
   * [object Object] — `string`
   *
   *
   */
  title?: string;

  /**
   * Intro Text — `simplePortableText`
   *
   *
   */
  introText?: SimplePortableText;

  /**
   * Seo — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Bankruptcy archive
 *
 *
 */
export interface BankruptcyArchive extends SanityDocument {
  _type: "bankruptcyArchive";

  /**
   * [object Object] — `string`
   *
   *
   */
  title?: string;

  /**
   * Intro Text — `simplePortableText`
   *
   *
   */
  introText?: SimplePortableText;

  /**
   * Seo — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Competence archive
 *
 *
 */
export interface CompetenceArchive extends SanityDocument {
  _type: "competenceArchive";

  /**
   * [object Object] — `string`
   *
   *
   */
  title?: string;

  /**
   * Intro Text — `simplePortableText`
   *
   *
   */
  introText?: SimplePortableText;

  /**
   * Seo — `seo`
   *
   *
   */
  seo?: Seo;
}

export type SimplePortableText = Array<SanityKeyed<SanityBlock>>;

export type PortableText = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<FlexibleImage>
  | SanityKeyed<PeopleBlock>
  | SanityKeyed<Table>
  | SanityKeyed<Quote>
  | SanityKeyed<CompetenceLinks>
>;

export type Figure = {
  _type: "figure";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * Alternative text — `string`
   *
   * Describe the content of the image. Important for SEO and accessiblity.
   */
  alt?: string;

  /**
   * Purely decorative image? — `boolean`
   *
   *
   */
  decorative?: boolean;
};

export type FlexibleImage = {
  _type: "flexibleImage";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Format (aspect ratio) — `string`
   *
   *
   */
  customRatio?: "0" | "1" | "medium" | "vertical" | "horizontal";

  /**
   * Fullwidth? — `boolean`
   *
   *
   */
  fullwidth?: boolean;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * Alternative text — `string`
   *
   * Describe the content of the image. Important for SEO and accessiblity.
   */
  alt?: string;

  /**
   * Purely decorative image? — `boolean`
   *
   *
   */
  decorative?: boolean;
};

export type Seo = {
  _type: "seo";
  /**
   * Meta Title — `string`
   *
   * Title used for search engines and browsers
   */
  metaTitle?: string;

  /**
   * Meta Description — `text`
   *
   * Description for search engines
   */
  metaDesc?: string;

  /**
   * Share Title — `string`
   *
   * Title used for social sharing cards
   */
  shareTitle?: string;

  /**
   * Share Description — `text`
   *
   * Description used for social sharing cards
   */
  shareDesc?: string;

  /**
   * Share Graphic — `image`
   *
   * Recommended size: 1200x630 (PNG or JPG)
   */
  shareGraphic?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Share Graphic Alt text — `string`
   *
   *
   */
  shareGraphicAlt?: string;
};

export type RequiredTitle = string;

export type Button = {
  _type: "button";
  /**
   * Type lenke — `string`
   *
   *
   */
  linkType?: "internal" | "external";

  /**
   * Velg dokument — `internalLink`
   *
   *
   */
  internalLink?: InternalLink;

  /**
   * URL — `url`
   *
   *
   */
  externalLink?: string;

  /**
   * Egendefinert tittel — `boolean`
   *
   *
   */
  hasCustomTitle?: boolean;

  /**
   * Egendefinert tittel — `string`
   *
   *
   */
  customTitle?: string;
};

export type InternalLink = SanityReference<
  | Page
  | Article
  | Bankruptcy
  | Person
  | Competence
  | HomePage
  | BankruptcyArchive
  | CompetenceArchive
  | PeopleArchive
  | ArticleArchive
>;

export type InternalLinkObject = {
  _type: "internalLinkObject";
  /**
   * Select document — `reference`
   *
   *
   */
  internalLink?: SanityReference<
    | Page
    | Article
    | Bankruptcy
    | Person
    | Competence
    | HomePage
    | BankruptcyArchive
    | CompetenceArchive
    | PeopleArchive
    | ArticleArchive
  >;
};

export type ExternalLink = string;

export type ExternalLinkObject = {
  _type: "externalLinkObject";
  /**
   * URL — `externalLink`
   *
   *
   */
  externalLink?: ExternalLink;
};

export type LocaleString = {
  _type: "localeString";
  /**
   * Norsk — `string`
   *
   *
   */
  no?: string;

  /**
   * English — `string`
   *
   *
   */
  en?: string;
};

export type LocaleText = {
  _type: "localeText";
  /**
   * Norsk — `text`
   *
   *
   */
  no?: string;

  /**
   * English — `text`
   *
   *
   */
  en?: string;
};

export type TextSection = {
  _type: "textSection";
  /**
   * Innhold — `portableText`
   *
   *
   */
  content?: PortableText;
};

export type VideoSection = {
  _type: "videoSection";
  /**
   * YouTube video URL — `url`
   *
   *
   */
  url?: string;
};

export type Blocks = Array<
  | SanityKeyed<{
      _type: "portableText";
      /**
       * content — `portableText`
       *
       *
       */
      content?: PortableText;
    }>
  | SanityKeyed<Boxes>
  | SanityKeyed<BigText>
  | SanityKeyed<CompetenceLinks>
  | SanityKeyed<PeopleBlock>
>;

export type Boxes = {
  _type: "boxes";
  /**
   * Boxes — `array`
   *
   *
   */
  boxes?: Array<
    SanityKeyed<{
      /**
       * Title — `string`
       *
       *
       */
      title?: string;

      /**
       * Custom Link Title — `string`
       *
       *
       */
      customLinkTitle?: string;

      /**
       * Select document — `reference`
       *
       *
       */
      link?: SanityReference<
        | Page
        | Article
        | Bankruptcy
        | Person
        | Competence
        | HomePage
        | BankruptcyArchive
        | CompetenceArchive
        | PeopleArchive
        | ArticleArchive
      >;
    }>
  >;
};

export type BigText = {
  _type: "bigText";
  /**
   * Text — `text`
   *
   *
   */
  text?: string;
};

export type CompetenceLinks = {
  _type: "competenceLinks";
  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Show All — `boolean`
   *
   *
   */
  showAll?: boolean;

  /**
   * Select Competences — `array`
   *
   *
   */
  selectCompetences?: Array<SanityKeyedReference<Competence>>;
};

export type PeopleBlock = {
  _type: "peopleBlock";
  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Show Contact Info — `boolean`
   *
   *
   */
  showContactInfo?: boolean;

  /**
   * People — `array`
   *
   *
   */
  people?: Array<SanityKeyedReference<Person>>;
};

export type Quote = {
  _type: "quote";
  /**
   * Quote — `string`
   *
   *
   */
  quote?: string;

  /**
   * Cite — `string`
   *
   *
   */
  cite?: string;

  /**
   * Color — `string`
   *
   *
   */
  color?: "pink" | "dark";
};

export type Documents =
  | SiteConfig
  | Page
  | SeoConfig
  | Competence
  | Position
  | Auditor
  | Court
  | Person
  | Publication
  | PublicationType
  | Article
  | Bankruptcy
  | ContactConfig
  | HomePage
  | PeopleArchive
  | ArticleArchive
  | BankruptcyArchive
  | CompetenceArchive;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Table = any;
