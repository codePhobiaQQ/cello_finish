--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

-- Started on 2021-12-09 22:50:45 MSK

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 233 (class 1259 OID 26467)
-- Name: about_sections; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.about_sections (
    id integer NOT NULL,
    "FirstTextRu" text,
    "FirstTextEn" text,
    "FirstTextGe" text,
    "SecondTextRu" text,
    "SecondTextEn" text,
    "SecondTextGe" text,
    "ThirdTextRu" text,
    "ThirdTextEn" text,
    "ThirdTextGe" text,
    published_at timestamp with time zone,
    created_by integer,
    updated_by integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.about_sections OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 26465)
-- Name: about_sections_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.about_sections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.about_sections_id_seq OWNER TO postgres;

--
-- TOC entry 3565 (class 0 OID 0)
-- Dependencies: 232
-- Name: about_sections_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.about_sections_id_seq OWNED BY public.about_sections.id;


--
-- TOC entry 235 (class 1259 OID 26480)
-- Name: components_about_section_about_sections; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_about_section_about_sections (
    id integer NOT NULL,
    "FirstTextRu" text,
    "FirstTextEn" text,
    "FirstTextGe" text,
    "SecondTextRu" text,
    "SecondTextEn" text,
    "SecondTextGe" text,
    "ThirdTextRu" text,
    "ThirdTextEn" text,
    "ThirdTextGe" text,
    "SectionTitleRu" character varying(255),
    "SectionTitleEn" character varying(255),
    "SectionTitleGe" character varying(255)
);


ALTER TABLE public.components_about_section_about_sections OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 26478)
-- Name: components_about_section_about_sections_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_about_section_about_sections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.components_about_section_about_sections_id_seq OWNER TO postgres;

--
-- TOC entry 3566 (class 0 OID 0)
-- Dependencies: 234
-- Name: components_about_section_about_sections_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_about_section_about_sections_id_seq OWNED BY public.components_about_section_about_sections.id;


--
-- TOC entry 237 (class 1259 OID 26508)
-- Name: components_gallery_img_gallery_imgs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_gallery_img_gallery_imgs (
    id integer NOT NULL,
    "textRu" character varying(255),
    "textEn" character varying(255),
    "textGe" character varying(255)
);


ALTER TABLE public.components_gallery_img_gallery_imgs OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 26506)
-- Name: components_gallery_img_gallery_imgs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_gallery_img_gallery_imgs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.components_gallery_img_gallery_imgs_id_seq OWNER TO postgres;

--
-- TOC entry 3567 (class 0 OID 0)
-- Dependencies: 236
-- Name: components_gallery_img_gallery_imgs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_gallery_img_gallery_imgs_id_seq OWNED BY public.components_gallery_img_gallery_imgs.id;


--
-- TOC entry 229 (class 1259 OID 26438)
-- Name: components_main_section_main_sections; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_main_section_main_sections (
    id integer NOT NULL,
    "MainTitle" character varying(255),
    "MainSubTitle" character varying(255),
    "MainTitleLang" character varying(255),
    "TitleRu" character varying(255),
    "TitleEn" character varying(255),
    "TitleGe" character varying(255),
    "SubtitleRu" character varying(255),
    "SubtitleEn" character varying(255),
    "SubtitleGE" character varying(255),
    "SubtitleGe" character varying(255)
);


ALTER TABLE public.components_main_section_main_sections OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 26436)
-- Name: components_main_section_main_sections_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_main_section_main_sections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.components_main_section_main_sections_id_seq OWNER TO postgres;

--
-- TOC entry 3568 (class 0 OID 0)
-- Dependencies: 228
-- Name: components_main_section_main_sections_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_main_section_main_sections_id_seq OWNED BY public.components_main_section_main_sections.id;


--
-- TOC entry 243 (class 1259 OID 26549)
-- Name: components_video_section_video_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_video_section_video_components (
    id integer NOT NULL,
    "TitleRu" character varying(255),
    "TitleEn" character varying(255),
    "TitleGe" character varying(255),
    "locationRu" character varying(255),
    "descriptionRu" text,
    "descriptionEn" text,
    "descriptionGe" text,
    "locationEn" character varying(255),
    "locationGe" character varying(255)
);


ALTER TABLE public.components_video_section_video_components OWNER TO postgres;

--
-- TOC entry 242 (class 1259 OID 26547)
-- Name: components_video_section_video_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_video_section_video_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.components_video_section_video_components_id_seq OWNER TO postgres;

--
-- TOC entry 3569 (class 0 OID 0)
-- Dependencies: 242
-- Name: components_video_section_video_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_video_section_video_components_id_seq OWNED BY public.components_video_section_video_components.id;


--
-- TOC entry 201 (class 1259 OID 26260)
-- Name: core_store; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.core_store (
    id integer NOT NULL,
    key character varying(255),
    value text,
    type character varying(255),
    environment character varying(255),
    tag character varying(255)
);


ALTER TABLE public.core_store OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 26258)
-- Name: core_store_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.core_store_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.core_store_id_seq OWNER TO postgres;

--
-- TOC entry 3570 (class 0 OID 0)
-- Dependencies: 200
-- Name: core_store_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.core_store_id_seq OWNED BY public.core_store.id;


--
-- TOC entry 239 (class 1259 OID 26519)
-- Name: gallery_page_fields_s; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gallery_page_fields_s (
    id integer NOT NULL,
    published_at timestamp with time zone,
    created_by integer,
    updated_by integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    "SectionTitleRu" character varying(255),
    "SectionTitleEn" character varying(255),
    "SectionTitleGe" character varying(255)
);


ALTER TABLE public.gallery_page_fields_s OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 26529)
-- Name: gallery_page_fields_s_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gallery_page_fields_s_components (
    id integer NOT NULL,
    field character varying(255) NOT NULL,
    "order" integer NOT NULL,
    component_type character varying(255) NOT NULL,
    component_id integer NOT NULL,
    gallery_page_fields__id integer NOT NULL
);


ALTER TABLE public.gallery_page_fields_s_components OWNER TO postgres;

--
-- TOC entry 240 (class 1259 OID 26527)
-- Name: gallery_page_fields_s_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gallery_page_fields_s_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.gallery_page_fields_s_components_id_seq OWNER TO postgres;

--
-- TOC entry 3571 (class 0 OID 0)
-- Dependencies: 240
-- Name: gallery_page_fields_s_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gallery_page_fields_s_components_id_seq OWNED BY public.gallery_page_fields_s_components.id;


--
-- TOC entry 238 (class 1259 OID 26517)
-- Name: gallery_page_fields_s_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gallery_page_fields_s_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.gallery_page_fields_s_id_seq OWNER TO postgres;

--
-- TOC entry 3572 (class 0 OID 0)
-- Dependencies: 238
-- Name: gallery_page_fields_s_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gallery_page_fields_s_id_seq OWNED BY public.gallery_page_fields_s.id;


--
-- TOC entry 217 (class 1259 OID 26359)
-- Name: i18n_locales; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.i18n_locales (
    id integer NOT NULL,
    name character varying(255),
    code character varying(255),
    created_by integer,
    updated_by integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.i18n_locales OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 26357)
-- Name: i18n_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.i18n_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.i18n_locales_id_seq OWNER TO postgres;

--
-- TOC entry 3573 (class 0 OID 0)
-- Dependencies: 216
-- Name: i18n_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.i18n_locales_id_seq OWNED BY public.i18n_locales.id;


--
-- TOC entry 203 (class 1259 OID 26271)
-- Name: main_page; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.main_page (
    id integer NOT NULL,
    title character varying(255),
    description text,
    published_at timestamp with time zone,
    created_by integer,
    updated_by integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.main_page OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 26449)
-- Name: main_page_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.main_page_components (
    id integer NOT NULL,
    field character varying(255) NOT NULL,
    "order" integer NOT NULL,
    component_type character varying(255) NOT NULL,
    component_id integer NOT NULL,
    main_page_id integer NOT NULL
);


ALTER TABLE public.main_page_components OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 26447)
-- Name: main_page_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.main_page_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_page_components_id_seq OWNER TO postgres;

--
-- TOC entry 3574 (class 0 OID 0)
-- Dependencies: 230
-- Name: main_page_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.main_page_components_id_seq OWNED BY public.main_page_components.id;


--
-- TOC entry 202 (class 1259 OID 26269)
-- Name: main_page_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.main_page_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_page_id_seq OWNER TO postgres;

--
-- TOC entry 3575 (class 0 OID 0)
-- Dependencies: 202
-- Name: main_page_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.main_page_id_seq OWNED BY public.main_page.id;


--
-- TOC entry 213 (class 1259 OID 26338)
-- Name: strapi_administrator; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strapi_administrator (
    id integer NOT NULL,
    firstname character varying(255),
    lastname character varying(255),
    username character varying(255),
    email character varying(255) NOT NULL,
    password character varying(255),
    "resetPasswordToken" character varying(255),
    "registrationToken" character varying(255),
    "isActive" boolean,
    blocked boolean,
    "preferedLanguage" character varying(255)
);


ALTER TABLE public.strapi_administrator OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 26336)
-- Name: strapi_administrator_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.strapi_administrator_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.strapi_administrator_id_seq OWNER TO postgres;

--
-- TOC entry 3576 (class 0 OID 0)
-- Dependencies: 212
-- Name: strapi_administrator_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.strapi_administrator_id_seq OWNED BY public.strapi_administrator.id;


--
-- TOC entry 209 (class 1259 OID 26308)
-- Name: strapi_permission; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strapi_permission (
    id integer NOT NULL,
    action character varying(255) NOT NULL,
    subject character varying(255),
    properties jsonb,
    conditions jsonb,
    role integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.strapi_permission OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 26306)
-- Name: strapi_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.strapi_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.strapi_permission_id_seq OWNER TO postgres;

--
-- TOC entry 3577 (class 0 OID 0)
-- Dependencies: 208
-- Name: strapi_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.strapi_permission_id_seq OWNED BY public.strapi_permission.id;


--
-- TOC entry 211 (class 1259 OID 26321)
-- Name: strapi_role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strapi_role (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description character varying(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.strapi_role OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 26319)
-- Name: strapi_role_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.strapi_role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.strapi_role_id_seq OWNER TO postgres;

--
-- TOC entry 3578 (class 0 OID 0)
-- Dependencies: 210
-- Name: strapi_role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.strapi_role_id_seq OWNED BY public.strapi_role.id;


--
-- TOC entry 215 (class 1259 OID 26351)
-- Name: strapi_users_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strapi_users_roles (
    id integer NOT NULL,
    user_id integer,
    role_id integer
);


ALTER TABLE public.strapi_users_roles OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 26349)
-- Name: strapi_users_roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.strapi_users_roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.strapi_users_roles_id_seq OWNER TO postgres;

--
-- TOC entry 3579 (class 0 OID 0)
-- Dependencies: 214
-- Name: strapi_users_roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.strapi_users_roles_id_seq OWNED BY public.strapi_users_roles.id;


--
-- TOC entry 207 (class 1259 OID 26297)
-- Name: strapi_webhooks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strapi_webhooks (
    id integer NOT NULL,
    name character varying(255),
    url text,
    headers jsonb,
    events jsonb,
    enabled boolean
);


ALTER TABLE public.strapi_webhooks OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 26295)
-- Name: strapi_webhooks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.strapi_webhooks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.strapi_webhooks_id_seq OWNER TO postgres;

--
-- TOC entry 3580 (class 0 OID 0)
-- Dependencies: 206
-- Name: strapi_webhooks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.strapi_webhooks_id_seq OWNED BY public.strapi_webhooks.id;


--
-- TOC entry 219 (class 1259 OID 26374)
-- Name: upload_file; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upload_file (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "alternativeText" character varying(255),
    caption character varying(255),
    width integer,
    height integer,
    formats jsonb,
    hash character varying(255) NOT NULL,
    ext character varying(255),
    mime character varying(255) NOT NULL,
    size numeric(10,2) NOT NULL,
    url character varying(255) NOT NULL,
    "previewUrl" character varying(255),
    provider character varying(255) NOT NULL,
    provider_metadata jsonb,
    created_by integer,
    updated_by integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.upload_file OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 26372)
-- Name: upload_file_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.upload_file_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.upload_file_id_seq OWNER TO postgres;

--
-- TOC entry 3581 (class 0 OID 0)
-- Dependencies: 218
-- Name: upload_file_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.upload_file_id_seq OWNED BY public.upload_file.id;


--
-- TOC entry 221 (class 1259 OID 26387)
-- Name: upload_file_morph; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upload_file_morph (
    id integer NOT NULL,
    upload_file_id integer,
    related_id integer,
    related_type text,
    field text,
    "order" integer
);


ALTER TABLE public.upload_file_morph OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 26385)
-- Name: upload_file_morph_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.upload_file_morph_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.upload_file_morph_id_seq OWNER TO postgres;

--
-- TOC entry 3582 (class 0 OID 0)
-- Dependencies: 220
-- Name: upload_file_morph_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.upload_file_morph_id_seq OWNED BY public.upload_file_morph.id;


--
-- TOC entry 223 (class 1259 OID 26398)
-- Name: users-permissions_permission; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."users-permissions_permission" (
    id integer NOT NULL,
    type character varying(255) NOT NULL,
    controller character varying(255) NOT NULL,
    action character varying(255) NOT NULL,
    enabled boolean NOT NULL,
    policy character varying(255),
    role integer,
    created_by integer,
    updated_by integer
);


ALTER TABLE public."users-permissions_permission" OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 26396)
-- Name: users-permissions_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."users-permissions_permission_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."users-permissions_permission_id_seq" OWNER TO postgres;

--
-- TOC entry 3583 (class 0 OID 0)
-- Dependencies: 222
-- Name: users-permissions_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."users-permissions_permission_id_seq" OWNED BY public."users-permissions_permission".id;


--
-- TOC entry 225 (class 1259 OID 26409)
-- Name: users-permissions_role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."users-permissions_role" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255),
    type character varying(255),
    created_by integer,
    updated_by integer
);


ALTER TABLE public."users-permissions_role" OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 26407)
-- Name: users-permissions_role_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."users-permissions_role_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."users-permissions_role_id_seq" OWNER TO postgres;

--
-- TOC entry 3584 (class 0 OID 0)
-- Dependencies: 224
-- Name: users-permissions_role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."users-permissions_role_id_seq" OWNED BY public."users-permissions_role".id;


--
-- TOC entry 227 (class 1259 OID 26422)
-- Name: users-permissions_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."users-permissions_user" (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    provider character varying(255),
    password character varying(255),
    "resetPasswordToken" character varying(255),
    "confirmationToken" character varying(255),
    confirmed boolean,
    blocked boolean,
    role integer,
    created_by integer,
    updated_by integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public."users-permissions_user" OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 26420)
-- Name: users-permissions_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."users-permissions_user_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."users-permissions_user_id_seq" OWNER TO postgres;

--
-- TOC entry 3585 (class 0 OID 0)
-- Dependencies: 226
-- Name: users-permissions_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."users-permissions_user_id_seq" OWNED BY public."users-permissions_user".id;


--
-- TOC entry 205 (class 1259 OID 26284)
-- Name: video; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.video (
    id integer NOT NULL,
    "Title" character varying(255),
    "Description" text,
    "Price" integer,
    "Level" character varying(255),
    published_at timestamp with time zone,
    created_by integer,
    updated_by integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.video OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 26282)
-- Name: video_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.video_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.video_id_seq OWNER TO postgres;

--
-- TOC entry 3586 (class 0 OID 0)
-- Dependencies: 204
-- Name: video_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.video_id_seq OWNED BY public.video.id;


--
-- TOC entry 245 (class 1259 OID 26560)
-- Name: video_page_fields; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.video_page_fields (
    id integer NOT NULL,
    published_at timestamp with time zone,
    created_by integer,
    updated_by integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.video_page_fields OWNER TO postgres;

--
-- TOC entry 247 (class 1259 OID 26570)
-- Name: video_page_fields_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.video_page_fields_components (
    id integer NOT NULL,
    field character varying(255) NOT NULL,
    "order" integer NOT NULL,
    component_type character varying(255) NOT NULL,
    component_id integer NOT NULL,
    video_page_field_id integer NOT NULL
);


ALTER TABLE public.video_page_fields_components OWNER TO postgres;

--
-- TOC entry 246 (class 1259 OID 26568)
-- Name: video_page_fields_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.video_page_fields_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.video_page_fields_components_id_seq OWNER TO postgres;

--
-- TOC entry 3587 (class 0 OID 0)
-- Dependencies: 246
-- Name: video_page_fields_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.video_page_fields_components_id_seq OWNED BY public.video_page_fields_components.id;


--
-- TOC entry 244 (class 1259 OID 26558)
-- Name: video_page_fields_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.video_page_fields_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.video_page_fields_id_seq OWNER TO postgres;

--
-- TOC entry 3588 (class 0 OID 0)
-- Dependencies: 244
-- Name: video_page_fields_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.video_page_fields_id_seq OWNED BY public.video_page_fields.id;


--
-- TOC entry 3305 (class 2604 OID 26470)
-- Name: about_sections id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.about_sections ALTER COLUMN id SET DEFAULT nextval('public.about_sections_id_seq'::regclass);


--
-- TOC entry 3308 (class 2604 OID 26483)
-- Name: components_about_section_about_sections id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_about_section_about_sections ALTER COLUMN id SET DEFAULT nextval('public.components_about_section_about_sections_id_seq'::regclass);


--
-- TOC entry 3309 (class 2604 OID 26511)
-- Name: components_gallery_img_gallery_imgs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_gallery_img_gallery_imgs ALTER COLUMN id SET DEFAULT nextval('public.components_gallery_img_gallery_imgs_id_seq'::regclass);


--
-- TOC entry 3303 (class 2604 OID 26441)
-- Name: components_main_section_main_sections id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_main_section_main_sections ALTER COLUMN id SET DEFAULT nextval('public.components_main_section_main_sections_id_seq'::regclass);


--
-- TOC entry 3314 (class 2604 OID 26552)
-- Name: components_video_section_video_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_video_section_video_components ALTER COLUMN id SET DEFAULT nextval('public.components_video_section_video_components_id_seq'::regclass);


--
-- TOC entry 3275 (class 2604 OID 26263)
-- Name: core_store id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.core_store ALTER COLUMN id SET DEFAULT nextval('public.core_store_id_seq'::regclass);


--
-- TOC entry 3310 (class 2604 OID 26522)
-- Name: gallery_page_fields_s id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gallery_page_fields_s ALTER COLUMN id SET DEFAULT nextval('public.gallery_page_fields_s_id_seq'::regclass);


--
-- TOC entry 3313 (class 2604 OID 26532)
-- Name: gallery_page_fields_s_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gallery_page_fields_s_components ALTER COLUMN id SET DEFAULT nextval('public.gallery_page_fields_s_components_id_seq'::regclass);


--
-- TOC entry 3291 (class 2604 OID 26362)
-- Name: i18n_locales id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.i18n_locales ALTER COLUMN id SET DEFAULT nextval('public.i18n_locales_id_seq'::regclass);


--
-- TOC entry 3276 (class 2604 OID 26274)
-- Name: main_page id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.main_page ALTER COLUMN id SET DEFAULT nextval('public.main_page_id_seq'::regclass);


--
-- TOC entry 3304 (class 2604 OID 26452)
-- Name: main_page_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.main_page_components ALTER COLUMN id SET DEFAULT nextval('public.main_page_components_id_seq'::regclass);


--
-- TOC entry 3289 (class 2604 OID 26341)
-- Name: strapi_administrator id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_administrator ALTER COLUMN id SET DEFAULT nextval('public.strapi_administrator_id_seq'::regclass);


--
-- TOC entry 3283 (class 2604 OID 26311)
-- Name: strapi_permission id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_permission ALTER COLUMN id SET DEFAULT nextval('public.strapi_permission_id_seq'::regclass);


--
-- TOC entry 3286 (class 2604 OID 26324)
-- Name: strapi_role id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_role ALTER COLUMN id SET DEFAULT nextval('public.strapi_role_id_seq'::regclass);


--
-- TOC entry 3290 (class 2604 OID 26354)
-- Name: strapi_users_roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_users_roles ALTER COLUMN id SET DEFAULT nextval('public.strapi_users_roles_id_seq'::regclass);


--
-- TOC entry 3282 (class 2604 OID 26300)
-- Name: strapi_webhooks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_webhooks ALTER COLUMN id SET DEFAULT nextval('public.strapi_webhooks_id_seq'::regclass);


--
-- TOC entry 3294 (class 2604 OID 26377)
-- Name: upload_file id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upload_file ALTER COLUMN id SET DEFAULT nextval('public.upload_file_id_seq'::regclass);


--
-- TOC entry 3297 (class 2604 OID 26390)
-- Name: upload_file_morph id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upload_file_morph ALTER COLUMN id SET DEFAULT nextval('public.upload_file_morph_id_seq'::regclass);


--
-- TOC entry 3298 (class 2604 OID 26401)
-- Name: users-permissions_permission id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."users-permissions_permission" ALTER COLUMN id SET DEFAULT nextval('public."users-permissions_permission_id_seq"'::regclass);


--
-- TOC entry 3299 (class 2604 OID 26412)
-- Name: users-permissions_role id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."users-permissions_role" ALTER COLUMN id SET DEFAULT nextval('public."users-permissions_role_id_seq"'::regclass);


--
-- TOC entry 3300 (class 2604 OID 26425)
-- Name: users-permissions_user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."users-permissions_user" ALTER COLUMN id SET DEFAULT nextval('public."users-permissions_user_id_seq"'::regclass);


--
-- TOC entry 3279 (class 2604 OID 26287)
-- Name: video id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.video ALTER COLUMN id SET DEFAULT nextval('public.video_id_seq'::regclass);


--
-- TOC entry 3315 (class 2604 OID 26563)
-- Name: video_page_fields id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.video_page_fields ALTER COLUMN id SET DEFAULT nextval('public.video_page_fields_id_seq'::regclass);


--
-- TOC entry 3318 (class 2604 OID 26573)
-- Name: video_page_fields_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.video_page_fields_components ALTER COLUMN id SET DEFAULT nextval('public.video_page_fields_components_id_seq'::regclass);


--
-- TOC entry 3545 (class 0 OID 26467)
-- Dependencies: 233
-- Data for Name: about_sections; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.about_sections (id, "FirstTextRu", "FirstTextEn", "FirstTextGe", "SecondTextRu", "SecondTextEn", "SecondTextGe", "ThirdTextRu", "ThirdTextEn", "ThirdTextGe", published_at, created_by, updated_by, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 3547 (class 0 OID 26480)
-- Dependencies: 235
-- Data for Name: components_about_section_about_sections; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_about_section_about_sections (id, "FirstTextRu", "FirstTextEn", "FirstTextGe", "SecondTextRu", "SecondTextEn", "SecondTextGe", "ThirdTextRu", "ThirdTextEn", "ThirdTextGe", "SectionTitleRu", "SectionTitleEn", "SectionTitleGe") FROM stdin;
1	We’ll start with the animal kingdom. Of all the living animals the largest one (and also the heaviest one) is the majestic7 blue whale. It’s so large that there are no scales8 available to weigh them as a whole.\\n" The heaviest blue whale ever recorded was at 190 tonnes, while the longest was about 33 meters long came shorter than a humble lion’s mane jellyfish that is nearly 37 meters long. Ru	We’ll start with the animal kingdom. Of all the living animals the largest one (and also the heaviest one) is the majestic7 blue whale. It’s so large that there are no scales8 available to weigh them as a whole.\\n" The heaviest blue whale ever recorded was at 190 tonnes, while the longest was about 33 meters long came shorter than a humble lion’s mane jellyfish that is nearly 37 meters long. En	We’ll start with the animal kingdom. Of all the living animals the largest one (and also the heaviest one) is the majestic7 blue whale. It’s so large that there are no scales8 available to weigh them as a whole.\\n" The heaviest blue whale ever recorded was at 190 tonnes, while the longest was about 33 meters long came shorter than a humble lion’s mane jellyfish that is nearly 37 meters long. Ge	We’ll start with the animal kingdom. Of all the living animals the largest one (and also the heaviest one) is the majestic7 blue whale. It’s so large that there are no scales8 available to weigh them as a whole.\\n" The heaviest blue whale ever recorded was at 190 tonnes, while the longest was about 33 meters long came shorter than a humble lion’s mane jellyfish that is nearly 37 meters long. Ru	We’ll start with the animal kingdom. Of all the living animals the largest one (and also the heaviest one) is the majestic7 blue whale. It’s so large that there are no scales8 available to weigh them as a whole.\\n" The heaviest blue whale ever recorded was at 190 tonnes, while the longest was about 33 meters long came shorter than a humble lion’s mane jellyfish that is nearly 37 meters long. En	We’ll start with the animal kingdom. Of all the living animals the largest one (and also the heaviest one) is the majestic7 blue whale. It’s so large that there are no scales8 available to weigh them as a whole.\\n" The heaviest blue whale ever recorded was at 190 tonnes, while the longest was about 33 meters long came shorter than a humble lion’s mane jellyfish that is nearly 37 meters long. Ge	We’ll start with the animal kingdom. Of all the living animals the largest one (and also the heaviest one) is the majestic7 blue whale. It’s so large that there are no scales8 available to weigh them as a whole.\\n" The heaviest blue whale ever recorded was at 190 tonnes, while the longest was about 33 meters long came shorter than a humble lion’s mane jellyfish that is nearly 37 meters long. Ru	We’ll start with the animal kingdom. Of all the living animals the largest one (and also the heaviest one) is the majestic7 blue whale. It’s so large that there are no scales8 available to weigh them as a whole.\\n" The heaviest blue whale ever recorded was at 190 tonnes, while the longest was about 33 meters long came shorter than a humble lion’s mane jellyfish that is nearly 37 meters long. En	We’ll start with the animal kingdom. Of all the living animals the largest one (and also the heaviest one) is the majestic7 blue whale. It’s so large that there are no scales8 available to weigh them as a whole.\\n" The heaviest blue whale ever recorded was at 190 tonnes, while the longest was about 33 meters long came shorter than a humble lion’s mane jellyfish that is nearly 37 meters long. Ge	BiographyRu	BiographyEn	BiographyGe
\.


--
-- TOC entry 3549 (class 0 OID 26508)
-- Dependencies: 237
-- Data for Name: components_gallery_img_gallery_imgs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_gallery_img_gallery_imgs (id, "textRu", "textEn", "textGe") FROM stdin;
7	5	5	5
8	6	6	6
1	test	test	test
2	test	test	test
3	1	1	1
4	2	2	2
5	3	3	3
6	4	4	4
\.


--
-- TOC entry 3541 (class 0 OID 26438)
-- Dependencies: 229
-- Data for Name: components_main_section_main_sections; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_main_section_main_sections (id, "MainTitle", "MainSubTitle", "MainTitleLang", "TitleRu", "TitleEn", "TitleGe", "SubtitleRu", "SubtitleEn", "SubtitleGE", "SubtitleGe") FROM stdin;
1	\N	\N	\N	TestRU	TestEN	TestGE	SubTestRU	SubTestEN	SubTestGE	\N
\.


--
-- TOC entry 3555 (class 0 OID 26549)
-- Dependencies: 243
-- Data for Name: components_video_section_video_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_video_section_video_components (id, "TitleRu", "TitleEn", "TitleGe", "locationRu", "descriptionRu", "descriptionEn", "descriptionGe", "locationEn", "locationGe") FROM stdin;
2	1	1	1	ru	1	1	1	en	ge
1	Concert on river Theme 1 Ru	Concert on river Theme 1 En	Concert on river Theme 1 Ge	Moscow, Classic dvorez sporta	Test of text in here important color ahah fdafjkaf akdfjaldfadf adf afadf asdf aest of text in here important color ahah fdafjkaf akdfjaldfadf adf afadf asdf a Ru	Test of text in here important color ahah fdafjkaf akdfjaldfadf adf afadf asdf aest of text in here important color ahah fdafjkaf akdfjaldfadf adf afadf asdf a En	Test of text in here important color ahah fdafjkaf akdfjaldfadf adf afadf asdf aest of text in here important color ahah fdafjkaf akdfjaldfadf adf afadf asdf a Ge	Moscow, Classic dvorez sporta	Moscow, Classic dvorez sporta
\.


--
-- TOC entry 3513 (class 0 OID 26260)
-- Dependencies: 201
-- Data for Name: core_store; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.core_store (id, key, value, type, environment, tag) FROM stdin;
3	model_def_application::video.video	{"uid":"application::video.video","collectionName":"video","kind":"collectionType","info":{"name":"Video"},"options":{"increments":true,"timestamps":["created_at","updated_at"],"draftAndPublish":true},"pluginOptions":{},"attributes":{"Title":{"type":"string"},"Description":{"type":"richtext"},"Preview":{"collection":"file","via":"related","allowedTypes":["images"],"plugin":"upload","required":false,"pluginOptions":{}},"MainImage":{"collection":"file","via":"related","allowedTypes":["images"],"plugin":"upload","required":false,"pluginOptions":{}},"video":{"collection":"file","via":"related","allowedTypes":["videos"],"plugin":"upload","required":false,"pluginOptions":{}},"Price":{"type":"integer"},"Level":{"type":"enumeration","enum":["Advance","Easy","Hard"]},"published_at":{"type":"datetime","configurable":false,"writable":true,"visible":false},"created_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true},"updated_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true}}}	object	\N	\N
4	model_def_strapi::webhooks	{"uid":"strapi::webhooks","collectionName":"strapi_webhooks","info":{"name":"Strapi webhooks","description":""},"options":{"timestamps":false},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string"},"url":{"type":"text"},"headers":{"type":"json"},"events":{"type":"json"},"enabled":{"type":"boolean"}}}	object	\N	\N
5	model_def_strapi::permission	{"uid":"strapi::permission","collectionName":"strapi_permission","kind":"collectionType","info":{"name":"Permission","description":""},"options":{"timestamps":["created_at","updated_at"]},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","minLength":1,"configurable":false,"required":true},"subject":{"type":"string","minLength":1,"configurable":false,"required":false},"properties":{"type":"json","configurable":false,"required":false,"default":{}},"conditions":{"type":"json","configurable":false,"required":false,"default":[]},"role":{"configurable":false,"model":"role","plugin":"admin"}}}	object	\N	\N
6	model_def_strapi::role	{"uid":"strapi::role","collectionName":"strapi_role","kind":"collectionType","info":{"name":"Role","description":""},"options":{"timestamps":["created_at","updated_at"]},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":1,"unique":true,"configurable":false,"required":true},"code":{"type":"string","minLength":1,"unique":true,"configurable":false,"required":true},"description":{"type":"string","configurable":false},"users":{"configurable":false,"collection":"user","via":"roles","plugin":"admin","attribute":"user","column":"id","isVirtual":true},"permissions":{"configurable":false,"plugin":"admin","collection":"permission","via":"role","isVirtual":true}}}	object	\N	\N
8	model_def_plugins::i18n.locale	{"uid":"plugins::i18n.locale","collectionName":"i18n_locales","kind":"collectionType","info":{"name":"locale","description":""},"options":{"timestamps":["created_at","updated_at"]},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","min":1,"max":50,"configurable":false},"code":{"type":"string","unique":true,"configurable":false},"created_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true},"updated_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true}}}	object	\N	\N
13	plugin_users-permissions_grant	{"email":{"enabled":true,"icon":"envelope"},"discord":{"enabled":false,"icon":"discord","key":"","secret":"","callback":"/auth/discord/callback","scope":["identify","email"]},"facebook":{"enabled":false,"icon":"facebook-square","key":"","secret":"","callback":"/auth/facebook/callback","scope":["email"]},"google":{"enabled":false,"icon":"google","key":"","secret":"","callback":"/auth/google/callback","scope":["email"]},"github":{"enabled":false,"icon":"github","key":"","secret":"","callback":"/auth/github/callback","scope":["user","user:email"]},"microsoft":{"enabled":false,"icon":"windows","key":"","secret":"","callback":"/auth/microsoft/callback","scope":["user.read"]},"twitter":{"enabled":false,"icon":"twitter","key":"","secret":"","callback":"/auth/twitter/callback"},"instagram":{"enabled":false,"icon":"instagram","key":"","secret":"","callback":"/auth/instagram/callback","scope":["user_profile"]},"vk":{"enabled":false,"icon":"vk","key":"","secret":"","callback":"/auth/vk/callback","scope":["email"]},"twitch":{"enabled":false,"icon":"twitch","key":"","secret":"","callback":"/auth/twitch/callback","scope":["user:read:email"]},"linkedin":{"enabled":false,"icon":"linkedin","key":"","secret":"","callback":"/auth/linkedin/callback","scope":["r_liteprofile","r_emailaddress"]},"cognito":{"enabled":false,"icon":"aws","key":"","secret":"","subdomain":"my.subdomain.com","callback":"/auth/cognito/callback","scope":["email","openid","profile"]},"reddit":{"enabled":false,"icon":"reddit","key":"","secret":"","state":true,"callback":"/auth/reddit/callback","scope":["identity"]},"auth0":{"enabled":false,"icon":"","key":"","secret":"","subdomain":"my-tenant.eu","callback":"/auth/auth0/callback","scope":["openid","email","profile"]},"cas":{"enabled":false,"icon":"book","key":"","secret":"","callback":"/auth/cas/callback","scope":["openid email"],"subdomain":"my.subdomain.com/cas"}}	object		
14	plugin_upload_settings	{"sizeOptimization":true,"responsiveDimensions":true}	object	development	
16	plugin_content_manager_configuration_content_types::application::video.video	{"uid":"application::video.video","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"Title","defaultSortBy":"Title","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"Id","searchable":true,"sortable":true}},"Title":{"edit":{"label":"Title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Title","searchable":true,"sortable":true}},"Description":{"edit":{"label":"Description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Description","searchable":false,"sortable":false}},"Preview":{"edit":{"label":"Preview","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Preview","searchable":false,"sortable":false}},"MainImage":{"edit":{"label":"MainImage","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"MainImage","searchable":false,"sortable":false}},"video":{"edit":{"label":"Video","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Video","searchable":false,"sortable":false}},"Price":{"edit":{"label":"Price","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Price","searchable":true,"sortable":true}},"Level":{"edit":{"label":"Level","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Level","searchable":true,"sortable":true}},"created_at":{"edit":{"label":"Created_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Created_at","searchable":true,"sortable":true}},"updated_at":{"edit":{"label":"Updated_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Updated_at","searchable":true,"sortable":true}}},"layouts":{"list":["id","Title","Preview","MainImage"],"editRelations":[],"edit":[[{"name":"Title","size":6}],[{"name":"Description","size":12}],[{"name":"Preview","size":6},{"name":"MainImage","size":6}],[{"name":"video","size":6},{"name":"Price","size":4}],[{"name":"Level","size":6}]]}}	object		
23	plugin_i18n_default_locale	"en"	string		
10	model_def_plugins::users-permissions.permission	{"uid":"plugins::users-permissions.permission","collectionName":"users-permissions_permission","kind":"collectionType","info":{"name":"permission","description":""},"options":{"timestamps":false},"pluginOptions":{"content-manager":{"visible":false}},"attributes":{"type":{"type":"string","required":true,"configurable":false},"controller":{"type":"string","required":true,"configurable":false},"action":{"type":"string","required":true,"configurable":false},"enabled":{"type":"boolean","required":true,"configurable":false},"policy":{"type":"string","configurable":false},"role":{"model":"role","via":"permissions","plugin":"users-permissions","configurable":false},"created_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true},"updated_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true}}}	object	\N	\N
29	model_def_main-section.main-section	{"uid":"main-section.main-section","collectionName":"components_main_section_main_sections","info":{"name":"MainSection","icon":"align-justify","description":""},"options":{"timestamps":false},"attributes":{"BackgroundImage":{"model":"file","via":"related","allowedTypes":["images"],"plugin":"upload","required":false,"pluginOptions":{}},"TitleRu":{"type":"string"},"TitleEn":{"type":"string"},"TitleGe":{"type":"string"},"SubtitleRu":{"type":"string"},"SubtitleEn":{"type":"string"},"SubtitleGe":{"type":"string"}}}	object	\N	\N
42	plugin_content_manager_configuration_content_types::application::video-page-fields.video-page-fields	{"uid":"application::video-page-fields.video-page-fields","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"Id","searchable":true,"sortable":true}},"VideoComponent":{"edit":{"label":"VideoComponent","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"VideoComponent","searchable":false,"sortable":false}},"created_at":{"edit":{"label":"Created_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Created_at","searchable":true,"sortable":true}},"updated_at":{"edit":{"label":"Updated_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Updated_at","searchable":true,"sortable":true}}},"layouts":{"list":["id","created_at","updated_at"],"editRelations":[],"edit":[[{"name":"VideoComponent","size":12}]]}}	object		
15	plugin_content_manager_configuration_content_types::application::main-page-fields.main-page-fields	{"uid":"application::main-page-fields.main-page-fields","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"Id","searchable":true,"sortable":true}},"MainSection":{"edit":{"label":"MainSection","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"MainSection","searchable":false,"sortable":false}},"AboutSection":{"edit":{"label":"AboutSection","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"AboutSection","searchable":false,"sortable":false}},"created_at":{"edit":{"label":"Created_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Created_at","searchable":true,"sortable":true}},"updated_at":{"edit":{"label":"Updated_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Updated_at","searchable":true,"sortable":true}}},"layouts":{"list":["id","created_at","updated_at"],"edit":[[{"name":"MainSection","size":12}],[{"name":"AboutSection","size":12}]],"editRelations":[]}}	object		
17	plugin_content_manager_configuration_content_types::strapi::permission	{"uid":"strapi::permission","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"action","defaultSortBy":"action","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"Id","searchable":true,"sortable":true}},"action":{"edit":{"label":"Action","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Action","searchable":true,"sortable":true}},"subject":{"edit":{"label":"Subject","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Subject","searchable":true,"sortable":true}},"properties":{"edit":{"label":"Properties","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Properties","searchable":false,"sortable":false}},"conditions":{"edit":{"label":"Conditions","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Conditions","searchable":false,"sortable":false}},"role":{"edit":{"label":"Role","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"Role","searchable":true,"sortable":true}},"created_at":{"edit":{"label":"Created_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Created_at","searchable":true,"sortable":true}},"updated_at":{"edit":{"label":"Updated_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Updated_at","searchable":true,"sortable":true}}},"layouts":{"list":["id","action","subject","role"],"editRelations":["role"],"edit":[[{"name":"action","size":6},{"name":"subject","size":6}],[{"name":"properties","size":12}],[{"name":"conditions","size":12}]]}}	object		
18	plugin_content_manager_configuration_content_types::strapi::role	{"uid":"strapi::role","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"Id","searchable":true,"sortable":true}},"name":{"edit":{"label":"Name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Name","searchable":true,"sortable":true}},"code":{"edit":{"label":"Code","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Code","searchable":true,"sortable":true}},"description":{"edit":{"label":"Description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Description","searchable":true,"sortable":true}},"users":{"edit":{"label":"Users","description":"","placeholder":"","visible":true,"editable":true,"mainField":"firstname"},"list":{"label":"Users","searchable":false,"sortable":false}},"permissions":{"edit":{"label":"Permissions","description":"","placeholder":"","visible":true,"editable":true,"mainField":"action"},"list":{"label":"Permissions","searchable":false,"sortable":false}},"created_at":{"edit":{"label":"Created_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Created_at","searchable":true,"sortable":true}},"updated_at":{"edit":{"label":"Updated_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Updated_at","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","code","description"],"editRelations":["users","permissions"],"edit":[[{"name":"name","size":6},{"name":"code","size":6}],[{"name":"description","size":6}]]}}	object		
19	plugin_content_manager_configuration_content_types::strapi::user	{"uid":"strapi::user","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"firstname","defaultSortBy":"firstname","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"Id","searchable":true,"sortable":true}},"firstname":{"edit":{"label":"Firstname","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Firstname","searchable":true,"sortable":true}},"lastname":{"edit":{"label":"Lastname","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Lastname","searchable":true,"sortable":true}},"username":{"edit":{"label":"Username","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Username","searchable":true,"sortable":true}},"email":{"edit":{"label":"Email","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Email","searchable":true,"sortable":true}},"password":{"edit":{"label":"Password","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Password","searchable":true,"sortable":true}},"resetPasswordToken":{"edit":{"label":"ResetPasswordToken","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"ResetPasswordToken","searchable":true,"sortable":true}},"registrationToken":{"edit":{"label":"RegistrationToken","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"RegistrationToken","searchable":true,"sortable":true}},"isActive":{"edit":{"label":"IsActive","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"IsActive","searchable":true,"sortable":true}},"roles":{"edit":{"label":"Roles","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"Roles","searchable":false,"sortable":false}},"blocked":{"edit":{"label":"Blocked","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Blocked","searchable":true,"sortable":true}},"preferedLanguage":{"edit":{"label":"PreferedLanguage","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"PreferedLanguage","searchable":true,"sortable":true}}},"layouts":{"list":["id","firstname","lastname","username"],"editRelations":["roles"],"edit":[[{"name":"firstname","size":6},{"name":"lastname","size":6}],[{"name":"username","size":6},{"name":"email","size":6}],[{"name":"password","size":6},{"name":"resetPasswordToken","size":6}],[{"name":"registrationToken","size":6},{"name":"isActive","size":4}],[{"name":"blocked","size":4},{"name":"preferedLanguage","size":6}]]}}	object		
20	plugin_content_manager_configuration_content_types::plugins::i18n.locale	{"uid":"plugins::i18n.locale","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"Id","searchable":true,"sortable":true}},"name":{"edit":{"label":"Name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Name","searchable":true,"sortable":true}},"code":{"edit":{"label":"Code","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Code","searchable":true,"sortable":true}},"created_at":{"edit":{"label":"Created_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Created_at","searchable":true,"sortable":true}},"updated_at":{"edit":{"label":"Updated_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Updated_at","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","code","created_at"],"editRelations":[],"edit":[[{"name":"name","size":6},{"name":"code","size":6}]]}}	object		
21	plugin_content_manager_configuration_content_types::plugins::users-permissions.role	{"uid":"plugins::users-permissions.role","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"Id","searchable":true,"sortable":true}},"name":{"edit":{"label":"Name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Name","searchable":true,"sortable":true}},"description":{"edit":{"label":"Description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Description","searchable":true,"sortable":true}},"type":{"edit":{"label":"Type","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Type","searchable":true,"sortable":true}},"permissions":{"edit":{"label":"Permissions","description":"","placeholder":"","visible":true,"editable":true,"mainField":"type"},"list":{"label":"Permissions","searchable":false,"sortable":false}},"users":{"edit":{"label":"Users","description":"","placeholder":"","visible":true,"editable":true,"mainField":"username"},"list":{"label":"Users","searchable":false,"sortable":false}}},"layouts":{"list":["id","name","description","type"],"editRelations":["permissions","users"],"edit":[[{"name":"name","size":6},{"name":"description","size":6}],[{"name":"type","size":6}]]}}	object		
22	plugin_content_manager_configuration_content_types::plugins::users-permissions.permission	{"uid":"plugins::users-permissions.permission","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"type","defaultSortBy":"type","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"Id","searchable":true,"sortable":true}},"type":{"edit":{"label":"Type","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Type","searchable":true,"sortable":true}},"controller":{"edit":{"label":"Controller","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Controller","searchable":true,"sortable":true}},"action":{"edit":{"label":"Action","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Action","searchable":true,"sortable":true}},"enabled":{"edit":{"label":"Enabled","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Enabled","searchable":true,"sortable":true}},"policy":{"edit":{"label":"Policy","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Policy","searchable":true,"sortable":true}},"role":{"edit":{"label":"Role","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"Role","searchable":true,"sortable":true}}},"layouts":{"list":["id","type","controller","action"],"editRelations":["role"],"edit":[[{"name":"type","size":6},{"name":"controller","size":6}],[{"name":"action","size":6},{"name":"enabled","size":4}],[{"name":"policy","size":6}]]}}	object		
26	plugin_users-permissions_email	{"reset_password":{"display":"Email.template.reset_password","icon":"sync","options":{"from":{"name":"Administration Panel","email":"no-reply@strapi.io"},"response_email":"","object":"Reset password","message":"<p>We heard that you lost your password. Sorry about that!</p>\\n\\n<p>But don’t worry! You can use the following link to reset your password:</p>\\n<p><%= URL %>?code=<%= TOKEN %></p>\\n\\n<p>Thanks.</p>"}},"email_confirmation":{"display":"Email.template.email_confirmation","icon":"check-square","options":{"from":{"name":"Administration Panel","email":"no-reply@strapi.io"},"response_email":"","object":"Account confirmation","message":"<p>Thank you for registering!</p>\\n\\n<p>You have to confirm your email address. Please click on the link below.</p>\\n\\n<p><%= URL %>?confirmation=<%= CODE %></p>\\n\\n<p>Thanks.</p>"}}}	object		
27	plugin_users-permissions_advanced	{"unique_email":true,"allow_register":true,"email_confirmation":false,"email_reset_password":null,"email_confirmation_redirection":null,"default_role":"authenticated"}	object		
28	core_admin_auth	{"providers":{"autoRegister":false,"defaultRole":null}}	object		
24	plugin_content_manager_configuration_content_types::plugins::users-permissions.user	{"uid":"plugins::users-permissions.user","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"username","defaultSortBy":"username","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"Id","searchable":true,"sortable":true}},"username":{"edit":{"label":"Username","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Username","searchable":true,"sortable":true}},"email":{"edit":{"label":"Email","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Email","searchable":true,"sortable":true}},"provider":{"edit":{"label":"Provider","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Provider","searchable":true,"sortable":true}},"password":{"edit":{"label":"Password","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Password","searchable":true,"sortable":true}},"resetPasswordToken":{"edit":{"label":"ResetPasswordToken","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"ResetPasswordToken","searchable":true,"sortable":true}},"confirmationToken":{"edit":{"label":"ConfirmationToken","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"ConfirmationToken","searchable":true,"sortable":true}},"confirmed":{"edit":{"label":"Confirmed","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Confirmed","searchable":true,"sortable":true}},"blocked":{"edit":{"label":"Blocked","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Blocked","searchable":true,"sortable":true}},"role":{"edit":{"label":"Role","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"Role","searchable":true,"sortable":true}},"avatar":{"edit":{"label":"Avatar","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Avatar","searchable":false,"sortable":false}},"created_at":{"edit":{"label":"Created_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Created_at","searchable":true,"sortable":true}},"updated_at":{"edit":{"label":"Updated_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Updated_at","searchable":true,"sortable":true}}},"layouts":{"list":["id","username","email","confirmed"],"editRelations":["role"],"edit":[[{"name":"username","size":6},{"name":"email","size":6}],[{"name":"password","size":6},{"name":"confirmed","size":4}],[{"name":"blocked","size":4},{"name":"avatar","size":6}]]}}	object		
25	plugin_content_manager_configuration_content_types::plugins::upload.file	{"uid":"plugins::upload.file","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"Id","searchable":true,"sortable":true}},"name":{"edit":{"label":"Name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Name","searchable":true,"sortable":true}},"alternativeText":{"edit":{"label":"AlternativeText","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"AlternativeText","searchable":true,"sortable":true}},"caption":{"edit":{"label":"Caption","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Caption","searchable":true,"sortable":true}},"width":{"edit":{"label":"Width","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Width","searchable":true,"sortable":true}},"height":{"edit":{"label":"Height","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Height","searchable":true,"sortable":true}},"formats":{"edit":{"label":"Formats","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Formats","searchable":false,"sortable":false}},"hash":{"edit":{"label":"Hash","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Hash","searchable":true,"sortable":true}},"ext":{"edit":{"label":"Ext","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Ext","searchable":true,"sortable":true}},"mime":{"edit":{"label":"Mime","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Mime","searchable":true,"sortable":true}},"size":{"edit":{"label":"Size","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Size","searchable":true,"sortable":true}},"url":{"edit":{"label":"Url","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Url","searchable":true,"sortable":true}},"previewUrl":{"edit":{"label":"PreviewUrl","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"PreviewUrl","searchable":true,"sortable":true}},"provider":{"edit":{"label":"Provider","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Provider","searchable":true,"sortable":true}},"provider_metadata":{"edit":{"label":"Provider_metadata","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Provider_metadata","searchable":false,"sortable":false}},"related":{"edit":{"label":"Related","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Related","searchable":false,"sortable":false}},"created_at":{"edit":{"label":"Created_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Created_at","searchable":true,"sortable":true}},"updated_at":{"edit":{"label":"Updated_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Updated_at","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","alternativeText","caption"],"editRelations":["related"],"edit":[[{"name":"name","size":6},{"name":"alternativeText","size":6}],[{"name":"caption","size":6},{"name":"width","size":4}],[{"name":"height","size":4}],[{"name":"formats","size":12}],[{"name":"hash","size":6},{"name":"ext","size":6}],[{"name":"mime","size":6},{"name":"size","size":4}],[{"name":"url","size":6},{"name":"previewUrl","size":6}],[{"name":"provider","size":6}],[{"name":"provider_metadata","size":12}]]}}	object		
1	model_def_strapi::core-store	{"uid":"strapi::core-store","collectionName":"core_store","info":{"name":"core_store","description":""},"options":{"timestamps":false},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"key":{"type":"string"},"value":{"type":"text"},"type":{"type":"string"},"environment":{"type":"string"},"tag":{"type":"string"}}}	object	\N	\N
36	model_def_application::gallery-page-fields.gallery-page-fields	{"uid":"application::gallery-page-fields.gallery-page-fields","collectionName":"gallery_page_fields_s","kind":"singleType","info":{"name":"GalleryPageFields ","description":""},"options":{"increments":true,"timestamps":["created_at","updated_at"],"draftAndPublish":true},"pluginOptions":{},"attributes":{"GalleryImg":{"type":"component","repeatable":true,"component":"gallery-img.gallery-img"},"SectionTitleRu":{"type":"string"},"SectionTitleEn":{"type":"string"},"SectionTitleGe":{"type":"string"},"published_at":{"type":"datetime","configurable":false,"writable":true,"visible":false},"created_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true},"updated_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true}}}	object	\N	\N
2	model_def_application::main-page-fields.main-page-fields	{"uid":"application::main-page-fields.main-page-fields","collectionName":"main_page","kind":"singleType","info":{"name":"Main Page Fields","description":""},"options":{"increments":true,"timestamps":["created_at","updated_at"],"draftAndPublish":true},"pluginOptions":{},"attributes":{"MainSection":{"type":"component","repeatable":false,"component":"main-section.main-section"},"AboutSection":{"type":"component","repeatable":false,"component":"about-section.about-section"},"published_at":{"type":"datetime","configurable":false,"writable":true,"visible":false},"created_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true},"updated_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true}}}	object	\N	\N
11	model_def_plugins::users-permissions.role	{"uid":"plugins::users-permissions.role","collectionName":"users-permissions_role","kind":"collectionType","info":{"name":"role","description":""},"options":{"timestamps":false},"pluginOptions":{"content-manager":{"visible":false}},"attributes":{"name":{"type":"string","minLength":3,"required":true,"configurable":false},"description":{"type":"string","configurable":false},"type":{"type":"string","unique":true,"configurable":false},"permissions":{"collection":"permission","via":"role","plugin":"users-permissions","configurable":false,"isVirtual":true},"users":{"collection":"user","via":"role","configurable":false,"plugin":"users-permissions","isVirtual":true},"created_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true},"updated_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true}}}	object	\N	\N
33	model_def_about-section.about-section	{"uid":"about-section.about-section","collectionName":"components_about_section_about_sections","info":{"name":"AboutSection","icon":"angle-double-left","description":""},"options":{"timestamps":false},"attributes":{"FirstTextRu":{"type":"text"},"FirstTextEn":{"type":"text"},"FirstTextGe":{"type":"text"},"SecondTextRu":{"type":"text"},"SecondTextEn":{"type":"text"},"SecondTextGe":{"type":"text"},"ThirdTextRu":{"type":"text"},"ThirdTextEn":{"type":"text"},"ThirdTextGe":{"type":"text"},"FirstImg":{"model":"file","via":"related","allowedTypes":["images"],"plugin":"upload","required":false,"pluginOptions":{}},"SecondImg":{"model":"file","via":"related","allowedTypes":["images"],"plugin":"upload","required":false,"pluginOptions":{}},"ThirdImg":{"model":"file","via":"related","allowedTypes":["images"],"plugin":"upload","required":false,"pluginOptions":{}},"SectionTitleRu":{"type":"string"},"SectionTitleEn":{"type":"string"},"SectionTitleGe":{"type":"string"}}}	object	\N	\N
30	plugin_content_manager_configuration_components::main-section.main-section	{"uid":"main-section.main-section","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"TitleRu","defaultSortBy":"TitleRu","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"Id","searchable":false,"sortable":false}},"BackgroundImage":{"edit":{"label":"BackgroundImage","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"BackgroundImage","searchable":false,"sortable":false}},"TitleRu":{"edit":{"label":"TitleRu","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"TitleRu","searchable":true,"sortable":true}},"TitleEn":{"edit":{"label":"TitleEn","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"TitleEn","searchable":true,"sortable":true}},"TitleGe":{"edit":{"label":"TitleGe","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"TitleGe","searchable":true,"sortable":true}},"SubtitleRu":{"edit":{"label":"SubtitleRu","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"SubtitleRu","searchable":true,"sortable":true}},"SubtitleEn":{"edit":{"label":"SubtitleEn","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"SubtitleEn","searchable":true,"sortable":true}},"SubtitleGe":{"edit":{"label":"SubtitleGe","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"SubtitleGe","searchable":true,"sortable":true}}},"layouts":{"list":["id","BackgroundImage","TitleRu","TitleEn"],"edit":[[{"name":"BackgroundImage","size":6}],[{"name":"TitleRu","size":6},{"name":"TitleEn","size":6}],[{"name":"TitleGe","size":6}],[{"name":"SubtitleRu","size":6},{"name":"SubtitleEn","size":6}],[{"name":"SubtitleGe","size":6}]],"editRelations":[]},"isComponent":true}	object		
31	model_def_application::about-section.about-section	{"uid":"application::about-section.about-section","collectionName":"about_sections","kind":"singleType","info":{"name":"AboutSection"},"options":{"increments":true,"timestamps":["created_at","updated_at"],"draftAndPublish":true},"pluginOptions":{},"attributes":{"FirstTextRu":{"type":"text"},"FirstTextEn":{"type":"text"},"FirstTextGe":{"type":"text"},"SecondTextRu":{"type":"text"},"SecondTextEn":{"type":"text"},"SecondTextGe":{"type":"text"},"ThirdTextRu":{"type":"text"},"ThirdTextEn":{"type":"text"},"ThirdTextGe":{"type":"text"},"FirstImg":{"model":"file","via":"related","allowedTypes":["files"],"plugin":"upload","required":false,"pluginOptions":{}},"SecondImg":{"model":"file","via":"related","allowedTypes":["images"],"plugin":"upload","required":false,"pluginOptions":{}},"ThirdImg":{"model":"file","via":"related","allowedTypes":["images"],"plugin":"upload","required":false,"pluginOptions":{}},"published_at":{"type":"datetime","configurable":false,"writable":true,"visible":false},"created_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true},"updated_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true}}}	object	\N	\N
34	plugin_content_manager_configuration_components::about-section.about-section	{"uid":"about-section.about-section","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"SectionTitleRu","defaultSortBy":"SectionTitleRu","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"Id","searchable":false,"sortable":false}},"FirstTextRu":{"edit":{"label":"FirstTextRu","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"FirstTextRu","searchable":true,"sortable":true}},"FirstTextEn":{"edit":{"label":"FirstTextEn","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"FirstTextEn","searchable":true,"sortable":true}},"FirstTextGe":{"edit":{"label":"FirstTextGe","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"FirstTextGe","searchable":true,"sortable":true}},"SecondTextRu":{"edit":{"label":"SecondTextRu","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"SecondTextRu","searchable":true,"sortable":true}},"SecondTextEn":{"edit":{"label":"SecondTextEn","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"SecondTextEn","searchable":true,"sortable":true}},"SecondTextGe":{"edit":{"label":"SecondTextGe","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"SecondTextGe","searchable":true,"sortable":true}},"ThirdTextRu":{"edit":{"label":"ThirdTextRu","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"ThirdTextRu","searchable":true,"sortable":true}},"ThirdTextEn":{"edit":{"label":"ThirdTextEn","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"ThirdTextEn","searchable":true,"sortable":true}},"ThirdTextGe":{"edit":{"label":"ThirdTextGe","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"ThirdTextGe","searchable":true,"sortable":true}},"FirstImg":{"edit":{"label":"FirstImg","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"FirstImg","searchable":false,"sortable":false}},"SecondImg":{"edit":{"label":"SecondImg","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"SecondImg","searchable":false,"sortable":false}},"ThirdImg":{"edit":{"label":"ThirdImg","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"ThirdImg","searchable":false,"sortable":false}},"SectionTitleRu":{"edit":{"label":"SectionTitleRu","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"SectionTitleRu","searchable":true,"sortable":true}},"SectionTitleEn":{"edit":{"label":"SectionTitleEn","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"SectionTitleEn","searchable":true,"sortable":true}},"SectionTitleGe":{"edit":{"label":"SectionTitleGe","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"SectionTitleGe","searchable":true,"sortable":true}}},"layouts":{"list":["id","FirstTextRu","FirstTextEn","FirstTextGe"],"edit":[[{"name":"FirstTextRu","size":6},{"name":"FirstTextEn","size":6}],[{"name":"FirstTextGe","size":6},{"name":"SecondTextRu","size":6}],[{"name":"SecondTextEn","size":6},{"name":"SecondTextGe","size":6}],[{"name":"ThirdTextRu","size":6},{"name":"ThirdTextEn","size":6}],[{"name":"ThirdTextGe","size":6},{"name":"FirstImg","size":6}],[{"name":"SecondImg","size":6},{"name":"ThirdImg","size":6}],[{"name":"SectionTitleRu","size":6},{"name":"SectionTitleEn","size":6}],[{"name":"SectionTitleGe","size":6}]],"editRelations":[]},"isComponent":true}	object		
41	plugin_content_manager_configuration_components::video-section.video-component	{"uid":"video-section.video-component","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"TitleRu","defaultSortBy":"TitleRu","defaultSortOrder":"ASC"},"metadatas":{"TitleEn":{"edit":{"label":"TitleEn","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"TitleEn","searchable":true,"sortable":true}},"src":{"edit":{"label":"Src","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Src","searchable":false,"sortable":false}},"descriptionEn":{"edit":{"label":"DescriptionEn","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"DescriptionEn","searchable":true,"sortable":true}},"preview":{"edit":{"label":"Preview","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Preview","searchable":false,"sortable":false}},"locationGe":{"edit":{"label":"LocationGe","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"LocationGe","searchable":true,"sortable":true}},"TitleGe":{"edit":{"label":"TitleGe","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"TitleGe","searchable":true,"sortable":true}},"locationRu":{"edit":{"label":"LocationRu","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"LocationRu","searchable":true,"sortable":true}},"descriptionGe":{"edit":{"label":"DescriptionGe","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"DescriptionGe","searchable":true,"sortable":true}},"id":{"edit":{},"list":{"label":"Id","searchable":true,"sortable":true}},"TitleRu":{"edit":{"label":"TitleRu","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"TitleRu","searchable":true,"sortable":true}},"locationEn":{"edit":{"label":"LocationEn","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"LocationEn","searchable":true,"sortable":true}},"descriptionRu":{"edit":{"label":"DescriptionRu","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"DescriptionRu","searchable":true,"sortable":true}}},"layouts":{"list":["id","TitleRu","TitleEn","TitleGe"],"editRelations":[],"edit":[[{"name":"TitleRu","size":6},{"name":"TitleEn","size":6}],[{"name":"TitleGe","size":6}],[{"name":"descriptionRu","size":6},{"name":"descriptionEn","size":6}],[{"name":"descriptionGe","size":6}],[{"name":"preview","size":6},{"name":"src","size":6}],[{"name":"locationRu","size":6},{"name":"locationGe","size":6}],[{"name":"locationEn","size":6}]]},"isComponent":true}	object		
37	plugin_content_manager_configuration_components::gallery-img.gallery-img	{"uid":"gallery-img.gallery-img","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"textRu","defaultSortBy":"textRu","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"Id","searchable":false,"sortable":false}},"image":{"edit":{"label":"Image","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Image","searchable":false,"sortable":false}},"bigImg":{"edit":{"label":"BigImg","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"BigImg","searchable":false,"sortable":false}},"textRu":{"edit":{"label":"TextRu","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"TextRu","searchable":true,"sortable":true}},"textEn":{"edit":{"label":"TextEn","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"TextEn","searchable":true,"sortable":true}},"textGe":{"edit":{"label":"TextGe","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"TextGe","searchable":true,"sortable":true}}},"layouts":{"list":["id","image","bigImg","textRu"],"edit":[[{"name":"image","size":6},{"name":"bigImg","size":6}],[{"name":"textRu","size":6},{"name":"textEn","size":6}],[{"name":"textGe","size":6}]],"editRelations":[]},"isComponent":true}	object		
35	model_def_gallery-img.gallery-img	{"uid":"gallery-img.gallery-img","collectionName":"components_gallery_img_gallery_imgs","info":{"name":"GalleryImg","icon":"angle-double-right"},"options":{"timestamps":false},"attributes":{"image":{"model":"file","via":"related","allowedTypes":["images"],"plugin":"upload","required":false,"pluginOptions":{}},"bigImg":{"model":"file","via":"related","allowedTypes":["images"],"plugin":"upload","required":false,"pluginOptions":{}},"textRu":{"type":"string"},"textEn":{"type":"string"},"textGe":{"type":"string"}}}	object	\N	\N
38	plugin_content_manager_configuration_content_types::application::gallery-page-fields.gallery-page-fields	{"uid":"application::gallery-page-fields.gallery-page-fields","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"Id","searchable":true,"sortable":true}},"GalleryImg":{"edit":{"label":"GalleryImg","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"GalleryImg","searchable":false,"sortable":false}},"SectionTitleRu":{"edit":{"label":"SectionTitleRu","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"SectionTitleRu","searchable":true,"sortable":true}},"SectionTitleEn":{"edit":{"label":"SectionTitleEn","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"SectionTitleEn","searchable":true,"sortable":true}},"SectionTitleGe":{"edit":{"label":"SectionTitleGe","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"SectionTitleGe","searchable":true,"sortable":true}},"created_at":{"edit":{"label":"Created_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Created_at","searchable":true,"sortable":true}},"updated_at":{"edit":{"label":"Updated_at","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"Updated_at","searchable":true,"sortable":true}}},"layouts":{"list":["id","created_at","updated_at","SectionTitleRu"],"edit":[[{"name":"GalleryImg","size":12}],[{"name":"SectionTitleRu","size":6},{"name":"SectionTitleEn","size":6}],[{"name":"SectionTitleGe","size":6}]],"editRelations":[]}}	object		
39	model_def_video-section.video-component	{"uid":"video-section.video-component","collectionName":"components_video_section_video_components","info":{"name":"VideoComponent","icon":"angle-right"},"options":{"timestamps":false},"attributes":{"TitleRu":{"type":"string"},"TitleEn":{"type":"string"},"TitleGe":{"type":"string"},"locationRu":{"type":"string"},"descriptionRu":{"type":"text"},"descriptionEn":{"type":"text"},"descriptionGe":{"type":"text"},"preview":{"model":"file","via":"related","allowedTypes":["images"],"plugin":"upload","required":false,"pluginOptions":{}},"src":{"model":"file","via":"related","allowedTypes":["videos"],"plugin":"upload","required":false,"pluginOptions":{}},"locationEn":{"type":"string"},"locationGe":{"type":"string"}}}	object	\N	\N
40	model_def_application::video-page-fields.video-page-fields	{"uid":"application::video-page-fields.video-page-fields","collectionName":"video_page_fields","kind":"singleType","info":{"name":"VideoPageFields"},"options":{"increments":true,"timestamps":["created_at","updated_at"],"draftAndPublish":true},"pluginOptions":{},"attributes":{"VideoComponent":{"type":"component","repeatable":true,"component":"video-section.video-component"},"published_at":{"type":"datetime","configurable":false,"writable":true,"visible":false},"created_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true},"updated_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true}}}	object	\N	\N
7	model_def_strapi::user	{"uid":"strapi::user","collectionName":"strapi_administrator","kind":"collectionType","info":{"name":"User","description":""},"options":{"timestamps":false},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"firstname":{"type":"string","unique":false,"minLength":1,"configurable":false,"required":false},"lastname":{"type":"string","unique":false,"minLength":1,"configurable":false,"required":false},"username":{"type":"string","unique":false,"configurable":false,"required":false},"email":{"type":"email","minLength":6,"configurable":false,"required":true,"unique":true,"private":true},"password":{"type":"password","minLength":6,"configurable":false,"required":false,"private":true},"resetPasswordToken":{"type":"string","configurable":false,"private":true},"registrationToken":{"type":"string","configurable":false,"private":true},"isActive":{"type":"boolean","default":false,"configurable":false,"private":true},"roles":{"collection":"role","collectionName":"strapi_users_roles","via":"users","dominant":true,"plugin":"admin","configurable":false,"private":true,"attribute":"role","column":"id","isVirtual":true},"blocked":{"type":"boolean","default":false,"configurable":false,"private":true},"preferedLanguage":{"type":"string","configurable":false,"required":false}}}	object	\N	\N
9	model_def_plugins::upload.file	{"uid":"plugins::upload.file","collectionName":"upload_file","kind":"collectionType","info":{"name":"file","description":""},"options":{"timestamps":["created_at","updated_at"]},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","configurable":false,"required":true},"alternativeText":{"type":"string","configurable":false},"caption":{"type":"string","configurable":false},"width":{"type":"integer","configurable":false},"height":{"type":"integer","configurable":false},"formats":{"type":"json","configurable":false},"hash":{"type":"string","configurable":false,"required":true},"ext":{"type":"string","configurable":false},"mime":{"type":"string","configurable":false,"required":true},"size":{"type":"decimal","configurable":false,"required":true},"url":{"type":"string","configurable":false,"required":true},"previewUrl":{"type":"string","configurable":false},"provider":{"type":"string","configurable":false,"required":true},"provider_metadata":{"type":"json","configurable":false},"related":{"collection":"*","filter":"field","configurable":false},"created_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true},"updated_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true}}}	object	\N	\N
12	model_def_plugins::users-permissions.user	{"uid":"plugins::users-permissions.user","collectionName":"users-permissions_user","kind":"collectionType","info":{"name":"user","description":""},"options":{"draftAndPublish":false,"timestamps":["created_at","updated_at"]},"attributes":{"username":{"type":"string","minLength":3,"unique":true,"configurable":false,"required":true},"email":{"type":"email","minLength":6,"configurable":false,"required":true},"provider":{"type":"string","configurable":false},"password":{"type":"password","minLength":6,"configurable":false,"private":true},"resetPasswordToken":{"type":"string","configurable":false,"private":true},"confirmationToken":{"type":"string","configurable":false,"private":true},"confirmed":{"type":"boolean","default":false,"configurable":false},"blocked":{"type":"boolean","default":false,"configurable":false},"role":{"model":"role","via":"users","plugin":"users-permissions","configurable":false},"avatar":{"collection":"file","via":"related","allowedTypes":["images"],"plugin":"upload","required":false,"pluginOptions":{}},"created_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true},"updated_by":{"model":"user","plugin":"admin","configurable":false,"writable":false,"visible":false,"private":true}}}	object	\N	\N
\.


--
-- TOC entry 3551 (class 0 OID 26519)
-- Dependencies: 239
-- Data for Name: gallery_page_fields_s; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gallery_page_fields_s (id, published_at, created_by, updated_by, created_at, updated_at, "SectionTitleRu", "SectionTitleEn", "SectionTitleGe") FROM stdin;
1	2021-12-07 17:09:53.725+03	1	1	2021-12-07 17:08:50.839+03	2021-12-07 21:31:27.204+03	GalleryRu	GalleryEn	GalleryGe
\.


--
-- TOC entry 3553 (class 0 OID 26529)
-- Dependencies: 241
-- Data for Name: gallery_page_fields_s_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gallery_page_fields_s_components (id, field, "order", component_type, component_id, gallery_page_fields__id) FROM stdin;
7	GalleryImg	7	components_gallery_img_gallery_imgs	7	1
8	GalleryImg	8	components_gallery_img_gallery_imgs	8	1
1	GalleryImg	1	components_gallery_img_gallery_imgs	1	1
2	GalleryImg	2	components_gallery_img_gallery_imgs	2	1
3	GalleryImg	3	components_gallery_img_gallery_imgs	3	1
4	GalleryImg	4	components_gallery_img_gallery_imgs	4	1
5	GalleryImg	5	components_gallery_img_gallery_imgs	5	1
6	GalleryImg	6	components_gallery_img_gallery_imgs	6	1
\.


--
-- TOC entry 3529 (class 0 OID 26359)
-- Dependencies: 217
-- Data for Name: i18n_locales; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.i18n_locales (id, name, code, created_by, updated_by, created_at, updated_at) FROM stdin;
1	English (en)	en	\N	\N	2021-12-06 22:44:19.631+03	2021-12-06 22:44:19.631+03
\.


--
-- TOC entry 3515 (class 0 OID 26271)
-- Dependencies: 203
-- Data for Name: main_page; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.main_page (id, title, description, published_at, created_by, updated_by, created_at, updated_at) FROM stdin;
1	hello	hello	2021-12-06 22:47:22.652+03	1	1	2021-12-06 22:46:00.482+03	2021-12-07 16:42:36.084+03
\.


--
-- TOC entry 3543 (class 0 OID 26449)
-- Dependencies: 231
-- Data for Name: main_page_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.main_page_components (id, field, "order", component_type, component_id, main_page_id) FROM stdin;
1	MainSection	1	components_main_section_main_sections	1	1
2	AboutSection	1	components_about_section_about_sections	1	1
\.


--
-- TOC entry 3525 (class 0 OID 26338)
-- Dependencies: 213
-- Data for Name: strapi_administrator; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strapi_administrator (id, firstname, lastname, username, email, password, "resetPasswordToken", "registrationToken", "isActive", blocked, "preferedLanguage") FROM stdin;
1	Vitalik	Peregudov	\N	vital.pereg@mail.ru	$2a$10$I3wXIGbGC46e/pTLgdtU1uwLbINk91onuBHWs7LFsd2Vw6rV7GvTW	\N	\N	t	\N	\N
\.


--
-- TOC entry 3521 (class 0 OID 26308)
-- Dependencies: 209
-- Data for Name: strapi_permission; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strapi_permission (id, action, subject, properties, conditions, role, created_at, updated_at) FROM stdin;
2	plugins::content-manager.explorer.create	application::video.video	{"fields": ["Title", "Description", "Preview", "MainImage", "video", "Price", "Level"]}	[]	2	2021-12-06 22:44:22.885+03	2021-12-06 22:44:22.924+03
4	plugins::content-manager.explorer.read	application::video.video	{"fields": ["Title", "Description", "Preview", "MainImage", "video", "Price", "Level"]}	[]	2	2021-12-06 22:44:22.885+03	2021-12-06 22:44:22.924+03
212	plugins::content-manager.explorer.delete	application::gallery-page-fields.gallery-page-fields	{}	[]	1	2021-12-07 21:54:32.729+03	2021-12-07 21:54:32.762+03
6	plugins::content-manager.explorer.update	application::video.video	{"fields": ["Title", "Description", "Preview", "MainImage", "video", "Price", "Level"]}	[]	2	2021-12-06 22:44:22.886+03	2021-12-06 22:44:22.925+03
7	plugins::content-manager.explorer.delete	application::main-page-fields.main-page-fields	{}	[]	2	2021-12-06 22:44:22.886+03	2021-12-06 22:44:22.925+03
8	plugins::content-manager.explorer.delete	application::video.video	{}	[]	2	2021-12-06 22:44:22.886+03	2021-12-06 22:44:22.925+03
9	plugins::content-manager.explorer.publish	application::main-page-fields.main-page-fields	{}	[]	2	2021-12-06 22:44:22.887+03	2021-12-06 22:44:22.934+03
10	plugins::content-manager.explorer.publish	application::video.video	{}	[]	2	2021-12-06 22:44:22.897+03	2021-12-06 22:44:22.934+03
11	plugins::upload.read	\N	{}	[]	2	2021-12-06 22:44:22.971+03	2021-12-06 22:44:22.987+03
12	plugins::upload.assets.create	\N	{}	[]	2	2021-12-06 22:44:22.971+03	2021-12-06 22:44:22.987+03
13	plugins::upload.assets.update	\N	{}	[]	2	2021-12-06 22:44:22.972+03	2021-12-06 22:44:22.987+03
14	plugins::upload.assets.download	\N	{}	[]	2	2021-12-06 22:44:22.975+03	2021-12-06 22:44:22.991+03
15	plugins::upload.assets.copy-link	\N	{}	[]	2	2021-12-06 22:44:22.975+03	2021-12-06 22:44:22.994+03
17	plugins::content-manager.explorer.create	application::video.video	{"fields": ["Title", "Description", "Preview", "MainImage", "video", "Price", "Level"]}	["admin::is-creator"]	3	2021-12-06 22:44:23.037+03	2021-12-06 22:44:23.077+03
19	plugins::content-manager.explorer.read	application::video.video	{"fields": ["Title", "Description", "Preview", "MainImage", "video", "Price", "Level"]}	["admin::is-creator"]	3	2021-12-06 22:44:23.037+03	2021-12-06 22:44:23.077+03
21	plugins::content-manager.explorer.update	application::video.video	{"fields": ["Title", "Description", "Preview", "MainImage", "video", "Price", "Level"]}	["admin::is-creator"]	3	2021-12-06 22:44:23.038+03	2021-12-06 22:44:23.077+03
24	plugins::content-manager.explorer.delete	application::main-page-fields.main-page-fields	{}	["admin::is-creator"]	3	2021-12-06 22:44:23.038+03	2021-12-06 22:44:23.078+03
22	plugins::content-manager.explorer.delete	application::video.video	{}	["admin::is-creator"]	3	2021-12-06 22:44:23.038+03	2021-12-06 22:44:23.078+03
25	plugins::upload.assets.create	\N	{}	[]	3	2021-12-06 22:44:23.039+03	2021-12-06 22:44:23.086+03
26	plugins::upload.assets.update	\N	{}	["admin::is-creator"]	3	2021-12-06 22:44:23.119+03	2021-12-06 22:44:23.128+03
27	plugins::upload.assets.download	\N	{}	[]	3	2021-12-06 22:44:23.119+03	2021-12-06 22:44:23.128+03
28	plugins::upload.assets.copy-link	\N	{}	[]	3	2021-12-06 22:44:23.119+03	2021-12-06 22:44:23.13+03
30	plugins::content-manager.explorer.create	application::video.video	{"fields": ["Title", "Description", "Preview", "MainImage", "video", "Price", "Level"]}	[]	1	2021-12-06 22:44:23.194+03	2021-12-06 22:44:23.223+03
31	plugins::content-manager.explorer.create	plugins::users-permissions.user	{"fields": ["username", "email", "provider", "password", "resetPasswordToken", "confirmationToken", "confirmed", "blocked", "role", "avatar"]}	[]	1	2021-12-06 22:44:23.194+03	2021-12-06 22:44:23.223+03
33	plugins::content-manager.explorer.read	application::video.video	{"fields": ["Title", "Description", "Preview", "MainImage", "video", "Price", "Level"]}	[]	1	2021-12-06 22:44:23.195+03	2021-12-06 22:44:23.224+03
34	plugins::content-manager.explorer.read	plugins::users-permissions.user	{"fields": ["username", "email", "provider", "password", "resetPasswordToken", "confirmationToken", "confirmed", "blocked", "role", "avatar"]}	[]	1	2021-12-06 22:44:23.195+03	2021-12-06 22:44:23.224+03
43	plugins::content-type-builder.read	\N	{}	[]	1	2021-12-06 22:44:23.272+03	2021-12-06 22:44:23.302+03
44	plugins::email.settings.read	\N	{}	[]	1	2021-12-06 22:44:23.272+03	2021-12-06 22:44:23.302+03
45	plugins::upload.read	\N	{}	[]	1	2021-12-06 22:44:23.273+03	2021-12-06 22:44:23.303+03
47	plugins::upload.assets.update	\N	{}	[]	1	2021-12-06 22:44:23.273+03	2021-12-06 22:44:23.312+03
52	plugins::i18n.locale.read	\N	{}	[]	1	2021-12-06 22:44:23.375+03	2021-12-06 22:44:23.4+03
51	plugins::i18n.locale.create	\N	{}	[]	1	2021-12-06 22:44:23.375+03	2021-12-06 22:44:23.399+03
53	plugins::i18n.locale.update	\N	{}	[]	1	2021-12-06 22:44:23.375+03	2021-12-06 22:44:23.4+03
54	plugins::i18n.locale.delete	\N	{}	[]	1	2021-12-06 22:44:23.376+03	2021-12-06 22:44:23.401+03
55	plugins::content-manager.single-types.configure-view	\N	{}	[]	1	2021-12-06 22:44:23.383+03	2021-12-06 22:44:23.407+03
56	plugins::content-manager.collection-types.configure-view	\N	{}	[]	1	2021-12-06 22:44:23.387+03	2021-12-06 22:44:23.412+03
61	plugins::users-permissions.roles.delete	\N	{}	[]	1	2021-12-06 22:44:23.464+03	2021-12-06 22:44:23.489+03
62	plugins::users-permissions.providers.read	\N	{}	[]	1	2021-12-06 22:44:23.464+03	2021-12-06 22:44:23.493+03
70	admin::marketplace.plugins.uninstall	\N	{}	[]	1	2021-12-06 22:44:23.543+03	2021-12-06 22:44:23.573+03
71	admin::webhooks.create	\N	{}	[]	1	2021-12-06 22:44:23.544+03	2021-12-06 22:44:23.573+03
80	admin::roles.read	\N	{}	[]	1	2021-12-06 22:44:23.67+03	2021-12-06 22:44:23.707+03
81	admin::roles.update	\N	{}	[]	1	2021-12-06 22:44:23.67+03	2021-12-06 22:44:23.707+03
23	plugins::upload.read	\N	{}	["admin::is-creator"]	3	2021-12-06 22:44:23.038+03	2021-12-06 22:44:23.078+03
36	plugins::content-manager.explorer.update	application::video.video	{"fields": ["Title", "Description", "Preview", "MainImage", "video", "Price", "Level"]}	[]	1	2021-12-06 22:44:23.195+03	2021-12-06 22:44:23.224+03
50	plugins::upload.settings.read	\N	{}	[]	1	2021-12-06 22:44:23.375+03	2021-12-06 22:44:23.399+03
59	plugins::users-permissions.roles.read	\N	{}	[]	1	2021-12-06 22:44:23.464+03	2021-12-06 22:44:23.489+03
75	admin::users.create	\N	{}	[]	1	2021-12-06 22:44:23.545+03	2021-12-06 22:44:23.574+03
213	plugins::content-manager.explorer.read	application::video-page-fields.video-page-fields	{"fields": ["VideoComponent.TitleRu", "VideoComponent.TitleEn", "VideoComponent.TitleGe", "VideoComponent.locationRu", "VideoComponent.descriptionRu", "VideoComponent.descriptionEn", "VideoComponent.descriptionGe", "VideoComponent.preview", "VideoComponent.src", "VideoComponent.locationEn", "VideoComponent.locationGe"]}	[]	1	2021-12-07 21:54:32.729+03	2021-12-07 21:54:32.762+03
46	plugins::upload.assets.create	\N	{}	[]	1	2021-12-06 22:44:23.273+03	2021-12-06 22:44:23.303+03
57	plugins::content-manager.components.configure-layout	\N	{}	[]	1	2021-12-06 22:44:23.388+03	2021-12-06 22:44:23.412+03
66	plugins::users-permissions.advanced-settings.read	\N	{}	[]	1	2021-12-06 22:44:23.475+03	2021-12-06 22:44:23.498+03
77	admin::users.update	\N	{}	[]	1	2021-12-06 22:44:23.557+03	2021-12-06 22:44:23.59+03
217	plugins::content-manager.explorer.delete	plugins::users-permissions.user	{}	[]	1	2021-12-07 21:54:32.735+03	2021-12-07 21:54:32.79+03
37	plugins::content-manager.explorer.update	plugins::users-permissions.user	{"fields": ["username", "email", "provider", "password", "resetPasswordToken", "confirmationToken", "confirmed", "blocked", "role", "avatar"]}	[]	1	2021-12-06 22:44:23.196+03	2021-12-06 22:44:23.225+03
49	plugins::upload.assets.copy-link	\N	{}	[]	1	2021-12-06 22:44:23.375+03	2021-12-06 22:44:23.399+03
60	plugins::users-permissions.roles.update	\N	{}	[]	1	2021-12-06 22:44:23.464+03	2021-12-06 22:44:23.489+03
69	admin::marketplace.plugins.install	\N	{}	[]	1	2021-12-06 22:44:23.533+03	2021-12-06 22:44:23.565+03
79	admin::roles.create	\N	{}	[]	1	2021-12-06 22:44:23.64+03	2021-12-06 22:44:23.705+03
214	plugins::content-manager.explorer.delete	application::video.video	{}	[]	1	2021-12-07 21:54:32.734+03	2021-12-07 21:54:32.762+03
48	plugins::upload.assets.download	\N	{}	[]	1	2021-12-06 22:44:23.288+03	2021-12-06 22:44:23.325+03
58	plugins::users-permissions.roles.create	\N	{}	[]	1	2021-12-06 22:44:23.393+03	2021-12-06 22:44:23.439+03
68	admin::marketplace.read	\N	{}	[]	1	2021-12-06 22:44:23.499+03	2021-12-06 22:44:23.533+03
78	admin::users.delete	\N	{}	[]	1	2021-12-06 22:44:23.604+03	2021-12-06 22:44:23.69+03
208	plugins::content-manager.explorer.delete	application::video-page-fields.video-page-fields	{}	[]	1	2021-12-07 21:54:32.73+03	2021-12-07 21:54:32.79+03
191	plugins::content-manager.explorer.create	application::gallery-page-fields.gallery-page-fields	{"fields": ["GalleryImg.image", "GalleryImg.bigImg", "GalleryImg.textRu", "GalleryImg.textEn", "GalleryImg.textGe", "SectionTitleRu", "SectionTitleEn", "SectionTitleGe"]}	[]	1	2021-12-07 17:07:29.733+03	2021-12-07 17:07:29.909+03
63	plugins::users-permissions.providers.update	\N	{}	[]	1	2021-12-06 22:44:23.464+03	2021-12-06 22:44:23.494+03
74	admin::webhooks.delete	\N	{}	[]	1	2021-12-06 22:44:23.545+03	2021-12-06 22:44:23.574+03
173	plugins::content-manager.explorer.create	application::main-page-fields.main-page-fields	{"fields": ["MainSection.BackgroundImage", "MainSection.TitleRu", "MainSection.TitleEn", "MainSection.TitleGe", "MainSection.SubtitleRu", "MainSection.SubtitleEn", "MainSection.SubtitleGe", "AboutSection.FirstTextRu", "AboutSection.FirstTextEn", "AboutSection.FirstTextGe", "AboutSection.SecondTextRu", "AboutSection.SecondTextEn", "AboutSection.SecondTextGe", "AboutSection.ThirdTextRu", "AboutSection.ThirdTextEn", "AboutSection.ThirdTextGe", "AboutSection.FirstImg", "AboutSection.SecondImg", "AboutSection.ThirdImg", "AboutSection.SectionTitleRu", "AboutSection.SectionTitleEn", "AboutSection.SectionTitleGe"]}	[]	1	2021-12-07 16:40:06.119+03	2021-12-07 16:40:06.138+03
209	plugins::content-manager.explorer.delete	application::main-page-fields.main-page-fields	{}	[]	1	2021-12-07 21:54:32.729+03	2021-12-07 21:54:32.763+03
192	plugins::content-manager.explorer.read	application::gallery-page-fields.gallery-page-fields	{"fields": ["GalleryImg.image", "GalleryImg.bigImg", "GalleryImg.textRu", "GalleryImg.textEn", "GalleryImg.textGe", "SectionTitleRu", "SectionTitleEn", "SectionTitleGe"]}	[]	1	2021-12-07 17:07:29.737+03	2021-12-07 17:07:29.909+03
64	plugins::users-permissions.email-templates.read	\N	{}	[]	1	2021-12-06 22:44:23.471+03	2021-12-06 22:44:23.494+03
72	admin::webhooks.read	\N	{}	[]	1	2021-12-06 22:44:23.544+03	2021-12-06 22:44:23.573+03
82	admin::roles.delete	\N	{}	[]	1	2021-12-06 22:44:23.671+03	2021-12-06 22:44:23.71+03
174	plugins::content-manager.explorer.read	application::main-page-fields.main-page-fields	{"fields": ["MainSection.BackgroundImage", "MainSection.TitleRu", "MainSection.TitleEn", "MainSection.TitleGe", "MainSection.SubtitleRu", "MainSection.SubtitleEn", "MainSection.SubtitleGe", "AboutSection.FirstTextRu", "AboutSection.FirstTextEn", "AboutSection.FirstTextGe", "AboutSection.SecondTextRu", "AboutSection.SecondTextEn", "AboutSection.SecondTextGe", "AboutSection.ThirdTextRu", "AboutSection.ThirdTextEn", "AboutSection.ThirdTextGe", "AboutSection.FirstImg", "AboutSection.SecondImg", "AboutSection.ThirdImg", "AboutSection.SectionTitleRu", "AboutSection.SectionTitleEn", "AboutSection.SectionTitleGe"]}	[]	1	2021-12-07 16:40:06.119+03	2021-12-07 16:40:06.138+03
193	plugins::content-manager.explorer.update	application::gallery-page-fields.gallery-page-fields	{"fields": ["GalleryImg.image", "GalleryImg.bigImg", "GalleryImg.textRu", "GalleryImg.textEn", "GalleryImg.textGe", "SectionTitleRu", "SectionTitleEn", "SectionTitleGe"]}	[]	1	2021-12-07 17:07:29.737+03	2021-12-07 17:07:29.909+03
216	plugins::content-manager.explorer.publish	application::main-page-fields.main-page-fields	{}	[]	1	2021-12-07 21:54:32.736+03	2021-12-07 21:54:32.79+03
65	plugins::users-permissions.email-templates.update	\N	{}	[]	1	2021-12-06 22:44:23.471+03	2021-12-06 22:44:23.494+03
73	admin::webhooks.update	\N	{}	[]	1	2021-12-06 22:44:23.544+03	2021-12-06 22:44:23.574+03
175	plugins::content-manager.explorer.update	application::main-page-fields.main-page-fields	{"fields": ["MainSection.BackgroundImage", "MainSection.TitleRu", "MainSection.TitleEn", "MainSection.TitleGe", "MainSection.SubtitleRu", "MainSection.SubtitleEn", "MainSection.SubtitleGe", "AboutSection.FirstTextRu", "AboutSection.FirstTextEn", "AboutSection.FirstTextGe", "AboutSection.SecondTextRu", "AboutSection.SecondTextEn", "AboutSection.SecondTextGe", "AboutSection.ThirdTextRu", "AboutSection.ThirdTextEn", "AboutSection.ThirdTextGe", "AboutSection.FirstImg", "AboutSection.SecondImg", "AboutSection.ThirdImg", "AboutSection.SectionTitleRu", "AboutSection.SectionTitleEn", "AboutSection.SectionTitleGe"]}	[]	1	2021-12-07 16:40:06.12+03	2021-12-07 16:40:06.139+03
211	plugins::content-manager.explorer.update	application::video-page-fields.video-page-fields	{"fields": ["VideoComponent.TitleRu", "VideoComponent.TitleEn", "VideoComponent.TitleGe", "VideoComponent.locationRu", "VideoComponent.descriptionRu", "VideoComponent.descriptionEn", "VideoComponent.descriptionGe", "VideoComponent.preview", "VideoComponent.src", "VideoComponent.locationEn", "VideoComponent.locationGe"]}	[]	1	2021-12-07 21:54:32.729+03	2021-12-07 21:54:32.762+03
210	plugins::content-manager.explorer.create	application::video-page-fields.video-page-fields	{"fields": ["VideoComponent.TitleRu", "VideoComponent.TitleEn", "VideoComponent.TitleGe", "VideoComponent.locationRu", "VideoComponent.descriptionRu", "VideoComponent.descriptionEn", "VideoComponent.descriptionGe", "VideoComponent.preview", "VideoComponent.src", "VideoComponent.locationEn", "VideoComponent.locationGe"]}	[]	1	2021-12-07 21:54:32.728+03	2021-12-07 21:54:32.791+03
218	plugins::content-manager.explorer.publish	application::video-page-fields.video-page-fields	{}	[]	1	2021-12-07 21:54:32.905+03	2021-12-07 21:54:32.914+03
67	plugins::users-permissions.advanced-settings.update	\N	{}	[]	1	2021-12-06 22:44:23.476+03	2021-12-06 22:44:23.499+03
76	admin::users.read	\N	{}	[]	1	2021-12-06 22:44:23.557+03	2021-12-06 22:44:23.59+03
215	plugins::content-manager.explorer.publish	application::gallery-page-fields.gallery-page-fields	{}	[]	1	2021-12-07 21:54:32.735+03	2021-12-07 21:54:32.762+03
219	plugins::content-manager.explorer.publish	application::video.video	{}	[]	1	2021-12-07 21:54:32.906+03	2021-12-07 21:54:32.914+03
3	plugins::content-manager.explorer.create	application::main-page-fields.main-page-fields	{"fields": []}	[]	2	2021-12-06 22:44:22.884+03	2021-12-06 22:53:04.283+03
5	plugins::content-manager.explorer.update	application::main-page-fields.main-page-fields	{"fields": []}	[]	2	2021-12-06 22:44:22.886+03	2021-12-06 22:53:04.283+03
1	plugins::content-manager.explorer.read	application::main-page-fields.main-page-fields	{"fields": []}	[]	2	2021-12-06 22:44:22.885+03	2021-12-06 22:53:04.282+03
16	plugins::content-manager.explorer.create	application::main-page-fields.main-page-fields	{"fields": []}	["admin::is-creator"]	3	2021-12-06 22:44:23.036+03	2021-12-06 22:53:04.283+03
18	plugins::content-manager.explorer.read	application::main-page-fields.main-page-fields	{"fields": []}	["admin::is-creator"]	3	2021-12-06 22:44:23.037+03	2021-12-06 22:53:04.283+03
20	plugins::content-manager.explorer.update	application::main-page-fields.main-page-fields	{"fields": []}	["admin::is-creator"]	3	2021-12-06 22:44:23.037+03	2021-12-06 22:53:04.297+03
\.


--
-- TOC entry 3523 (class 0 OID 26321)
-- Dependencies: 211
-- Data for Name: strapi_role; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strapi_role (id, name, code, description, created_at, updated_at) FROM stdin;
1	Super Admin	strapi-super-admin	Super Admins can access and manage all features and settings.	2021-12-06 22:44:22.787+03	2021-12-06 22:44:22.787+03
2	Editor	strapi-editor	Editors can manage and publish contents including those of other users.	2021-12-06 22:44:22.811+03	2021-12-06 22:44:22.811+03
3	Author	strapi-author	Authors can manage the content they have created.	2021-12-06 22:44:22.838+03	2021-12-06 22:44:22.838+03
\.


--
-- TOC entry 3527 (class 0 OID 26351)
-- Dependencies: 215
-- Data for Name: strapi_users_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strapi_users_roles (id, user_id, role_id) FROM stdin;
1	1	1
\.


--
-- TOC entry 3519 (class 0 OID 26297)
-- Dependencies: 207
-- Data for Name: strapi_webhooks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strapi_webhooks (id, name, url, headers, events, enabled) FROM stdin;
\.


--
-- TOC entry 3531 (class 0 OID 26374)
-- Dependencies: 219
-- Data for Name: upload_file; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upload_file (id, name, "alternativeText", caption, width, height, formats, hash, ext, mime, size, url, "previewUrl", provider, provider_metadata, created_by, updated_by, created_at, updated_at) FROM stdin;
1	1-40x40.png			40	40	\N	1_40x40_0750718592	.png	image/png	1.60	/uploads/1_40x40_0750718592.png	\N	local	\N	1	1	2021-12-06 22:48:19.23+03	2021-12-06 22:48:19.249+03
2	05-1.jpg			2581	1721	{"large": {"ext": ".jpg", "url": "/uploads/large_05_1_855f2ee0d7.jpg", "hash": "large_05_1_855f2ee0d7", "mime": "image/jpeg", "name": "large_05-1.jpg", "path": null, "size": 47.98, "width": 1000, "height": 667}, "small": {"ext": ".jpg", "url": "/uploads/small_05_1_855f2ee0d7.jpg", "hash": "small_05_1_855f2ee0d7", "mime": "image/jpeg", "name": "small_05-1.jpg", "path": null, "size": 15.48, "width": 500, "height": 333}, "medium": {"ext": ".jpg", "url": "/uploads/medium_05_1_855f2ee0d7.jpg", "hash": "medium_05_1_855f2ee0d7", "mime": "image/jpeg", "name": "medium_05-1.jpg", "path": null, "size": 29.78, "width": 750, "height": 500}, "thumbnail": {"ext": ".jpg", "url": "/uploads/thumbnail_05_1_855f2ee0d7.jpg", "hash": "thumbnail_05_1_855f2ee0d7", "mime": "image/jpeg", "name": "thumbnail_05-1.jpg", "path": null, "size": 4.96, "width": 234, "height": 156}}	05_1_855f2ee0d7	.jpg	image/jpeg	236.34	/uploads/05_1_855f2ee0d7.jpg	\N	local	\N	1	1	2021-12-06 23:11:55.848+03	2021-12-06 23:11:55.92+03
5	about1.jpg			853	1280	{"large": {"ext": ".jpg", "url": "/uploads/large_about1_3fbc4cf9cc.jpg", "hash": "large_about1_3fbc4cf9cc", "mime": "image/jpeg", "name": "large_about1.jpg", "path": null, "size": 57.8, "width": 666, "height": 1000}, "small": {"ext": ".jpg", "url": "/uploads/small_about1_3fbc4cf9cc.jpg", "hash": "small_about1_3fbc4cf9cc", "mime": "image/jpeg", "name": "small_about1.jpg", "path": null, "size": 19.13, "width": 333, "height": 500}, "medium": {"ext": ".jpg", "url": "/uploads/medium_about1_3fbc4cf9cc.jpg", "hash": "medium_about1_3fbc4cf9cc", "mime": "image/jpeg", "name": "medium_about1.jpg", "path": null, "size": 36.57, "width": 500, "height": 750}, "thumbnail": {"ext": ".jpg", "url": "/uploads/thumbnail_about1_3fbc4cf9cc.jpg", "hash": "thumbnail_about1_3fbc4cf9cc", "mime": "image/jpeg", "name": "thumbnail_about1.jpg", "path": null, "size": 3.23, "width": 104, "height": 156}}	about1_3fbc4cf9cc	.jpg	image/jpeg	76.49	/uploads/about1_3fbc4cf9cc.jpg	\N	local	\N	1	1	2021-12-07 14:59:19.183+03	2021-12-07 14:59:19.227+03
3	about2.jpeg			370	555	{"small": {"ext": ".jpeg", "url": "/uploads/small_about2_a3eb07b41c.jpeg", "hash": "small_about2_a3eb07b41c", "mime": "image/jpeg", "name": "small_about2.jpeg", "path": null, "size": 18.18, "width": 333, "height": 500}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_about2_a3eb07b41c.jpeg", "hash": "thumbnail_about2_a3eb07b41c", "mime": "image/jpeg", "name": "thumbnail_about2.jpeg", "path": null, "size": 3.47, "width": 104, "height": 156}}	about2_a3eb07b41c	.jpeg	image/jpeg	19.02	/uploads/about2_a3eb07b41c.jpeg	\N	local	\N	1	1	2021-12-07 14:59:19.18+03	2021-12-07 14:59:19.228+03
4	about3.jpeg			853	1280	{"large": {"ext": ".jpeg", "url": "/uploads/large_about3_9be3157847.jpeg", "hash": "large_about3_9be3157847", "mime": "image/jpeg", "name": "large_about3.jpeg", "path": null, "size": 46.38, "width": 666, "height": 1000}, "small": {"ext": ".jpeg", "url": "/uploads/small_about3_9be3157847.jpeg", "hash": "small_about3_9be3157847", "mime": "image/jpeg", "name": "small_about3.jpeg", "path": null, "size": 16.67, "width": 333, "height": 500}, "medium": {"ext": ".jpeg", "url": "/uploads/medium_about3_9be3157847.jpeg", "hash": "medium_about3_9be3157847", "mime": "image/jpeg", "name": "medium_about3.jpeg", "path": null, "size": 30.52, "width": 500, "height": 750}, "thumbnail": {"ext": ".jpeg", "url": "/uploads/thumbnail_about3_9be3157847.jpeg", "hash": "thumbnail_about3_9be3157847", "mime": "image/jpeg", "name": "thumbnail_about3.jpeg", "path": null, "size": 3.15, "width": 104, "height": 156}}	about3_9be3157847	.jpeg	image/jpeg	58.23	/uploads/about3_9be3157847.jpeg	\N	local	\N	1	1	2021-12-07 14:59:19.187+03	2021-12-07 14:59:19.235+03
6	videoplayback.mp4			\N	\N	\N	videoplayback_3aff63eb7f	.mp4	video/mp4	477.97	/uploads/videoplayback_3aff63eb7f.mp4	\N	local	\N	1	1	2021-12-07 22:00:27.554+03	2021-12-07 22:00:27.582+03
\.


--
-- TOC entry 3533 (class 0 OID 26387)
-- Dependencies: 221
-- Data for Name: upload_file_morph; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upload_file_morph (id, upload_file_id, related_id, related_type, field, "order") FROM stdin;
1	1	1	main_page	img	1
8	2	1	components_main_section_main_sections	BackgroundImage	1
9	5	1	components_about_section_about_sections	FirstImg	1
10	3	1	components_about_section_about_sections	SecondImg	1
11	4	1	components_about_section_about_sections	ThirdImg	1
30	3	7	components_gallery_img_gallery_imgs	image	1
31	3	7	components_gallery_img_gallery_imgs	bigImg	1
32	5	8	components_gallery_img_gallery_imgs	image	1
33	5	8	components_gallery_img_gallery_imgs	bigImg	1
34	4	1	components_gallery_img_gallery_imgs	image	1
35	4	1	components_gallery_img_gallery_imgs	bigImg	1
36	4	2	components_gallery_img_gallery_imgs	image	1
37	4	2	components_gallery_img_gallery_imgs	bigImg	1
38	4	3	components_gallery_img_gallery_imgs	image	1
39	4	3	components_gallery_img_gallery_imgs	bigImg	1
40	4	4	components_gallery_img_gallery_imgs	image	1
41	4	4	components_gallery_img_gallery_imgs	bigImg	1
42	4	5	components_gallery_img_gallery_imgs	image	1
43	4	5	components_gallery_img_gallery_imgs	bigImg	1
44	4	6	components_gallery_img_gallery_imgs	image	1
45	4	6	components_gallery_img_gallery_imgs	bigImg	1
48	3	2	components_video_section_video_components	preview	1
49	6	2	components_video_section_video_components	src	1
50	2	1	components_video_section_video_components	preview	1
51	6	1	components_video_section_video_components	src	1
\.


--
-- TOC entry 3535 (class 0 OID 26398)
-- Dependencies: 223
-- Data for Name: users-permissions_permission; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."users-permissions_permission" (id, type, controller, action, enabled, policy, role, created_by, updated_by) FROM stdin;
3	application	main-page-fields	find	f		1	\N	\N
6	application	main-page-fields	update	f		2	\N	\N
7	application	video	count	f		1	\N	\N
9	application	video	count	f		2	\N	\N
1	application	main-page-fields	delete	f		1	\N	\N
2	application	main-page-fields	delete	f		2	\N	\N
5	application	main-page-fields	update	f		1	\N	\N
8	application	video	create	f		1	\N	\N
10	application	video	create	f		2	\N	\N
11	application	video	delete	f		1	\N	\N
12	application	video	delete	f		2	\N	\N
13	application	video	find	f		1	\N	\N
14	application	video	find	f		2	\N	\N
15	application	video	findone	f		1	\N	\N
16	application	video	findone	f		2	\N	\N
17	application	video	update	f		1	\N	\N
18	application	video	update	f		2	\N	\N
19	content-manager	collection-types	bulkdelete	f		1	\N	\N
20	content-manager	collection-types	bulkdelete	f		2	\N	\N
21	content-manager	collection-types	create	f		1	\N	\N
22	content-manager	collection-types	create	f		2	\N	\N
23	content-manager	collection-types	delete	f		1	\N	\N
24	content-manager	collection-types	delete	f		2	\N	\N
25	content-manager	collection-types	find	f		1	\N	\N
26	content-manager	collection-types	find	f		2	\N	\N
27	content-manager	collection-types	findone	f		1	\N	\N
28	content-manager	collection-types	findone	f		2	\N	\N
29	content-manager	collection-types	previewmanyrelations	f		1	\N	\N
30	content-manager	collection-types	previewmanyrelations	f		2	\N	\N
31	content-manager	collection-types	publish	f		1	\N	\N
32	content-manager	collection-types	publish	f		2	\N	\N
33	content-manager	collection-types	unpublish	f		1	\N	\N
34	content-manager	collection-types	unpublish	f		2	\N	\N
35	content-manager	collection-types	update	f		1	\N	\N
36	content-manager	collection-types	update	f		2	\N	\N
37	content-manager	components	findcomponentconfiguration	f		1	\N	\N
38	content-manager	components	findcomponentconfiguration	f		2	\N	\N
39	content-manager	components	findcomponents	f		1	\N	\N
40	content-manager	components	findcomponents	f		2	\N	\N
41	content-manager	components	updatecomponentconfiguration	f		1	\N	\N
42	content-manager	components	updatecomponentconfiguration	f		2	\N	\N
43	content-manager	content-types	findcontenttypeconfiguration	f		1	\N	\N
44	content-manager	content-types	findcontenttypeconfiguration	f		2	\N	\N
45	content-manager	content-types	findcontenttypes	f		1	\N	\N
46	content-manager	content-types	findcontenttypes	f		2	\N	\N
47	content-manager	content-types	findcontenttypessettings	f		1	\N	\N
48	content-manager	content-types	findcontenttypessettings	f		2	\N	\N
49	content-manager	content-types	updatecontenttypeconfiguration	f		1	\N	\N
50	content-manager	content-types	updatecontenttypeconfiguration	f		2	\N	\N
51	content-manager	relations	find	f		1	\N	\N
52	content-manager	relations	find	f		2	\N	\N
53	content-manager	single-types	createorupdate	f		1	\N	\N
54	content-manager	single-types	createorupdate	f		2	\N	\N
55	content-manager	single-types	delete	f		1	\N	\N
56	content-manager	single-types	delete	f		2	\N	\N
57	content-manager	single-types	find	f		1	\N	\N
58	content-manager	single-types	find	f		2	\N	\N
59	content-manager	single-types	publish	f		1	\N	\N
60	content-manager	single-types	publish	f		2	\N	\N
61	content-manager	single-types	unpublish	f		1	\N	\N
62	content-manager	single-types	unpublish	f		2	\N	\N
64	content-manager	uid	checkuidavailability	f		2	\N	\N
65	content-manager	uid	generateuid	f		1	\N	\N
63	content-manager	uid	checkuidavailability	f		1	\N	\N
68	content-type-builder	builder	getreservednames	f		2	\N	\N
66	content-manager	uid	generateuid	f		2	\N	\N
4	application	main-page-fields	find	t		2	\N	\N
67	content-type-builder	builder	getreservednames	f		1	\N	\N
69	content-type-builder	componentcategories	deletecategory	f		2	\N	\N
72	content-type-builder	componentcategories	editcategory	f		2	\N	\N
70	content-type-builder	componentcategories	deletecategory	f		1	\N	\N
75	content-type-builder	components	deletecomponent	f		1	\N	\N
76	content-type-builder	components	deletecomponent	f		2	\N	\N
77	content-type-builder	components	getcomponent	f		1	\N	\N
86	content-type-builder	contenttypes	createcontenttype	f		2	\N	\N
87	content-type-builder	contenttypes	deletecontenttype	f		1	\N	\N
96	email	email	getsettings	f		2	\N	\N
97	email	email	send	f		1	\N	\N
109	i18n	locales	listlocales	f		1	\N	\N
106	i18n	locales	createlocale	f		2	\N	\N
118	upload	upload	find	f		2	\N	\N
119	upload	upload	findone	f		1	\N	\N
128	upload	upload	upload	f		2	\N	\N
129	users-permissions	auth	callback	f		1	\N	\N
138	users-permissions	auth	register	t		2	\N	\N
71	content-type-builder	componentcategories	editcategory	f		1	\N	\N
83	content-type-builder	connections	getconnections	f		1	\N	\N
93	content-type-builder	contenttypes	updatecontenttype	f		1	\N	\N
101	i18n	content-types	getnonlocalizedattributes	f		1	\N	\N
111	i18n	locales	updatelocale	f		1	\N	\N
120	upload	upload	findone	f		2	\N	\N
130	users-permissions	auth	callback	t		2	\N	\N
140	users-permissions	auth	resetpassword	t		2	\N	\N
155	users-permissions	user	me	t		1	\N	\N
163	users-permissions	userspermissions	getadvancedsettings	f		1	\N	\N
170	users-permissions	userspermissions	getpolicies	f		2	\N	\N
180	users-permissions	userspermissions	index	f		2	\N	\N
74	content-type-builder	components	createcomponent	f		2	\N	\N
84	content-type-builder	connections	getconnections	f		2	\N	\N
94	content-type-builder	contenttypes	updatecontenttype	f		2	\N	\N
102	i18n	content-types	getnonlocalizedattributes	f		2	\N	\N
112	i18n	locales	updatelocale	f		2	\N	\N
125	upload	upload	updatesettings	f		1	\N	\N
134	users-permissions	auth	emailconfirmation	t		2	\N	\N
142	users-permissions	auth	sendemailconfirmation	f		2	\N	\N
150	users-permissions	user	destroyall	f		2	\N	\N
160	users-permissions	userspermissions	createrole	f		2	\N	\N
173	users-permissions	userspermissions	getrole	f		1	\N	\N
185	users-permissions	userspermissions	updateemailtemplate	f		1	\N	\N
78	content-type-builder	components	getcomponent	f		2	\N	\N
89	content-type-builder	contenttypes	getcontenttype	f		1	\N	\N
99	email	email	test	f		1	\N	\N
108	i18n	locales	deletelocale	f		2	\N	\N
117	upload	upload	find	f		1	\N	\N
127	upload	upload	upload	f		1	\N	\N
137	users-permissions	auth	register	f		1	\N	\N
147	users-permissions	user	destroy	f		1	\N	\N
158	users-permissions	user	update	f		2	\N	\N
167	users-permissions	userspermissions	getpermissions	f		1	\N	\N
177	users-permissions	userspermissions	getroutes	f		1	\N	\N
188	users-permissions	userspermissions	updateproviders	f		2	\N	\N
79	content-type-builder	components	getcomponents	f		1	\N	\N
88	content-type-builder	contenttypes	deletecontenttype	f		2	\N	\N
98	email	email	send	f		2	\N	\N
107	i18n	locales	deletelocale	f		1	\N	\N
116	upload	upload	destroy	f		2	\N	\N
126	upload	upload	updatesettings	f		2	\N	\N
136	users-permissions	auth	forgotpassword	t		2	\N	\N
148	users-permissions	user	destroy	f		2	\N	\N
157	users-permissions	user	update	f		1	\N	\N
166	users-permissions	userspermissions	getemailtemplate	f		2	\N	\N
176	users-permissions	userspermissions	getroles	f		2	\N	\N
189	users-permissions	userspermissions	updaterole	f		1	\N	\N
80	content-type-builder	components	getcomponents	f		2	\N	\N
90	content-type-builder	contenttypes	getcontenttype	f		2	\N	\N
104	i18n	iso-locales	listisolocales	f		2	\N	\N
113	upload	upload	count	f		1	\N	\N
122	upload	upload	getsettings	f		2	\N	\N
131	users-permissions	auth	connect	t		1	\N	\N
143	users-permissions	user	count	f		1	\N	\N
152	users-permissions	user	find	f		2	\N	\N
162	users-permissions	userspermissions	deleterole	f		2	\N	\N
172	users-permissions	userspermissions	getproviders	f		2	\N	\N
182	users-permissions	userspermissions	searchusers	f		2	\N	\N
85	content-type-builder	contenttypes	createcontenttype	f		1	\N	\N
95	email	email	getsettings	f		1	\N	\N
105	i18n	locales	createlocale	f		1	\N	\N
114	upload	upload	count	f		2	\N	\N
123	upload	upload	search	f		1	\N	\N
132	users-permissions	auth	connect	t		2	\N	\N
145	users-permissions	user	create	f		1	\N	\N
154	users-permissions	user	findone	f		2	\N	\N
164	users-permissions	userspermissions	getadvancedsettings	f		2	\N	\N
171	users-permissions	userspermissions	getproviders	f		1	\N	\N
181	users-permissions	userspermissions	searchusers	f		1	\N	\N
190	users-permissions	userspermissions	updaterole	f		2	\N	\N
197	application	gallery-page-fields	delete	f		1	\N	\N
81	content-type-builder	components	updatecomponent	f		1	\N	\N
91	content-type-builder	contenttypes	getcontenttypes	f		1	\N	\N
103	i18n	iso-locales	listisolocales	f		1	\N	\N
115	upload	upload	destroy	f		1	\N	\N
124	upload	upload	search	f		2	\N	\N
133	users-permissions	auth	emailconfirmation	f		1	\N	\N
144	users-permissions	user	count	f		2	\N	\N
153	users-permissions	user	findone	f		1	\N	\N
165	users-permissions	userspermissions	getemailtemplate	f		1	\N	\N
175	users-permissions	userspermissions	getroles	f		1	\N	\N
183	users-permissions	userspermissions	updateadvancedsettings	f		1	\N	\N
198	application	gallery-page-fields	delete	f		2	\N	\N
139	users-permissions	auth	resetpassword	f		1	\N	\N
149	users-permissions	user	destroyall	f		1	\N	\N
159	users-permissions	userspermissions	createrole	f		1	\N	\N
169	users-permissions	userspermissions	getpolicies	f		1	\N	\N
179	users-permissions	userspermissions	index	f		1	\N	\N
186	users-permissions	userspermissions	updateemailtemplate	f		2	\N	\N
199	application	gallery-page-fields	find	t		2	\N	\N
146	users-permissions	user	create	f		2	\N	\N
156	users-permissions	user	me	t		2	\N	\N
168	users-permissions	userspermissions	getpermissions	f		2	\N	\N
178	users-permissions	userspermissions	getroutes	f		2	\N	\N
187	users-permissions	userspermissions	updateproviders	f		1	\N	\N
200	application	gallery-page-fields	find	f		1	\N	\N
201	application	gallery-page-fields	update	f		1	\N	\N
202	application	gallery-page-fields	update	f		2	\N	\N
203	application	video-page-fields	delete	f		1	\N	\N
204	application	video-page-fields	delete	f		2	\N	\N
205	application	video-page-fields	find	f		1	\N	\N
206	application	video-page-fields	find	t		2	\N	\N
207	application	video-page-fields	update	f		1	\N	\N
208	application	video-page-fields	update	f		2	\N	\N
73	content-type-builder	components	createcomponent	f		1	\N	\N
82	content-type-builder	components	updatecomponent	f		2	\N	\N
92	content-type-builder	contenttypes	getcontenttypes	f		2	\N	\N
100	email	email	test	f		2	\N	\N
110	i18n	locales	listlocales	f		2	\N	\N
121	upload	upload	getsettings	f		1	\N	\N
135	users-permissions	auth	forgotpassword	f		1	\N	\N
141	users-permissions	auth	sendemailconfirmation	f		1	\N	\N
151	users-permissions	user	find	f		1	\N	\N
161	users-permissions	userspermissions	deleterole	f		1	\N	\N
174	users-permissions	userspermissions	getrole	f		2	\N	\N
184	users-permissions	userspermissions	updateadvancedsettings	f		2	\N	\N
\.


--
-- TOC entry 3537 (class 0 OID 26409)
-- Dependencies: 225
-- Data for Name: users-permissions_role; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."users-permissions_role" (id, name, description, type, created_by, updated_by) FROM stdin;
1	Authenticated	Default role given to authenticated user.	authenticated	\N	\N
2	Public	Default role given to unauthenticated user.	public	\N	\N
\.


--
-- TOC entry 3539 (class 0 OID 26422)
-- Dependencies: 227
-- Data for Name: users-permissions_user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."users-permissions_user" (id, username, email, provider, password, "resetPasswordToken", "confirmationToken", confirmed, blocked, role, created_by, updated_by, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 3517 (class 0 OID 26284)
-- Dependencies: 205
-- Data for Name: video; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.video (id, "Title", "Description", "Price", "Level", published_at, created_by, updated_by, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 3557 (class 0 OID 26560)
-- Dependencies: 245
-- Data for Name: video_page_fields; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.video_page_fields (id, published_at, created_by, updated_by, created_at, updated_at) FROM stdin;
1	2021-12-07 22:01:15.38+03	1	1	2021-12-07 22:00:51.552+03	2021-12-07 22:25:17.554+03
\.


--
-- TOC entry 3559 (class 0 OID 26570)
-- Dependencies: 247
-- Data for Name: video_page_fields_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.video_page_fields_components (id, field, "order", component_type, component_id, video_page_field_id) FROM stdin;
2	VideoComponent	2	components_video_section_video_components	2	1
1	VideoComponent	1	components_video_section_video_components	1	1
\.


--
-- TOC entry 3589 (class 0 OID 0)
-- Dependencies: 232
-- Name: about_sections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.about_sections_id_seq', 1, false);


--
-- TOC entry 3590 (class 0 OID 0)
-- Dependencies: 234
-- Name: components_about_section_about_sections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_about_section_about_sections_id_seq', 1, true);


--
-- TOC entry 3591 (class 0 OID 0)
-- Dependencies: 236
-- Name: components_gallery_img_gallery_imgs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_gallery_img_gallery_imgs_id_seq', 8, true);


--
-- TOC entry 3592 (class 0 OID 0)
-- Dependencies: 228
-- Name: components_main_section_main_sections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_main_section_main_sections_id_seq', 1, true);


--
-- TOC entry 3593 (class 0 OID 0)
-- Dependencies: 242
-- Name: components_video_section_video_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_video_section_video_components_id_seq', 2, true);


--
-- TOC entry 3594 (class 0 OID 0)
-- Dependencies: 200
-- Name: core_store_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.core_store_id_seq', 42, true);


--
-- TOC entry 3595 (class 0 OID 0)
-- Dependencies: 240
-- Name: gallery_page_fields_s_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gallery_page_fields_s_components_id_seq', 8, true);


--
-- TOC entry 3596 (class 0 OID 0)
-- Dependencies: 238
-- Name: gallery_page_fields_s_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gallery_page_fields_s_id_seq', 1, true);


--
-- TOC entry 3597 (class 0 OID 0)
-- Dependencies: 216
-- Name: i18n_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.i18n_locales_id_seq', 1, true);


--
-- TOC entry 3598 (class 0 OID 0)
-- Dependencies: 230
-- Name: main_page_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.main_page_components_id_seq', 2, true);


--
-- TOC entry 3599 (class 0 OID 0)
-- Dependencies: 202
-- Name: main_page_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.main_page_id_seq', 1, true);


--
-- TOC entry 3600 (class 0 OID 0)
-- Dependencies: 212
-- Name: strapi_administrator_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.strapi_administrator_id_seq', 1, true);


--
-- TOC entry 3601 (class 0 OID 0)
-- Dependencies: 208
-- Name: strapi_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.strapi_permission_id_seq', 219, true);


--
-- TOC entry 3602 (class 0 OID 0)
-- Dependencies: 210
-- Name: strapi_role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.strapi_role_id_seq', 3, true);


--
-- TOC entry 3603 (class 0 OID 0)
-- Dependencies: 214
-- Name: strapi_users_roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.strapi_users_roles_id_seq', 1, true);


--
-- TOC entry 3604 (class 0 OID 0)
-- Dependencies: 206
-- Name: strapi_webhooks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.strapi_webhooks_id_seq', 1, false);


--
-- TOC entry 3605 (class 0 OID 0)
-- Dependencies: 218
-- Name: upload_file_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.upload_file_id_seq', 6, true);


--
-- TOC entry 3606 (class 0 OID 0)
-- Dependencies: 220
-- Name: upload_file_morph_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.upload_file_morph_id_seq', 51, true);


--
-- TOC entry 3607 (class 0 OID 0)
-- Dependencies: 222
-- Name: users-permissions_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."users-permissions_permission_id_seq"', 208, true);


--
-- TOC entry 3608 (class 0 OID 0)
-- Dependencies: 224
-- Name: users-permissions_role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."users-permissions_role_id_seq"', 2, true);


--
-- TOC entry 3609 (class 0 OID 0)
-- Dependencies: 226
-- Name: users-permissions_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."users-permissions_user_id_seq"', 1, false);


--
-- TOC entry 3610 (class 0 OID 0)
-- Dependencies: 204
-- Name: video_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.video_id_seq', 1, false);


--
-- TOC entry 3611 (class 0 OID 0)
-- Dependencies: 246
-- Name: video_page_fields_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.video_page_fields_components_id_seq', 2, true);


--
-- TOC entry 3612 (class 0 OID 0)
-- Dependencies: 244
-- Name: video_page_fields_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.video_page_fields_id_seq', 1, true);


--
-- TOC entry 3364 (class 2606 OID 26477)
-- Name: about_sections about_sections_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.about_sections
    ADD CONSTRAINT about_sections_pkey PRIMARY KEY (id);


--
-- TOC entry 3366 (class 2606 OID 26488)
-- Name: components_about_section_about_sections components_about_section_about_sections_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_about_section_about_sections
    ADD CONSTRAINT components_about_section_about_sections_pkey PRIMARY KEY (id);


--
-- TOC entry 3368 (class 2606 OID 26516)
-- Name: components_gallery_img_gallery_imgs components_gallery_img_gallery_imgs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_gallery_img_gallery_imgs
    ADD CONSTRAINT components_gallery_img_gallery_imgs_pkey PRIMARY KEY (id);


--
-- TOC entry 3360 (class 2606 OID 26446)
-- Name: components_main_section_main_sections components_main_section_main_sections_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_main_section_main_sections
    ADD CONSTRAINT components_main_section_main_sections_pkey PRIMARY KEY (id);


--
-- TOC entry 3374 (class 2606 OID 26557)
-- Name: components_video_section_video_components components_video_section_video_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_video_section_video_components
    ADD CONSTRAINT components_video_section_video_components_pkey PRIMARY KEY (id);


--
-- TOC entry 3320 (class 2606 OID 26268)
-- Name: core_store core_store_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.core_store
    ADD CONSTRAINT core_store_pkey PRIMARY KEY (id);


--
-- TOC entry 3372 (class 2606 OID 26537)
-- Name: gallery_page_fields_s_components gallery_page_fields_s_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gallery_page_fields_s_components
    ADD CONSTRAINT gallery_page_fields_s_components_pkey PRIMARY KEY (id);


--
-- TOC entry 3370 (class 2606 OID 26526)
-- Name: gallery_page_fields_s gallery_page_fields_s_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gallery_page_fields_s
    ADD CONSTRAINT gallery_page_fields_s_pkey PRIMARY KEY (id);


--
-- TOC entry 3342 (class 2606 OID 26371)
-- Name: i18n_locales i18n_locales_code_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.i18n_locales
    ADD CONSTRAINT i18n_locales_code_unique UNIQUE (code);


--
-- TOC entry 3344 (class 2606 OID 26369)
-- Name: i18n_locales i18n_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.i18n_locales
    ADD CONSTRAINT i18n_locales_pkey PRIMARY KEY (id);


--
-- TOC entry 3362 (class 2606 OID 26457)
-- Name: main_page_components main_page_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.main_page_components
    ADD CONSTRAINT main_page_components_pkey PRIMARY KEY (id);


--
-- TOC entry 3322 (class 2606 OID 26281)
-- Name: main_page main_page_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.main_page
    ADD CONSTRAINT main_page_pkey PRIMARY KEY (id);


--
-- TOC entry 3336 (class 2606 OID 26348)
-- Name: strapi_administrator strapi_administrator_email_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_administrator
    ADD CONSTRAINT strapi_administrator_email_unique UNIQUE (email);


--
-- TOC entry 3338 (class 2606 OID 26346)
-- Name: strapi_administrator strapi_administrator_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_administrator
    ADD CONSTRAINT strapi_administrator_pkey PRIMARY KEY (id);


--
-- TOC entry 3328 (class 2606 OID 26318)
-- Name: strapi_permission strapi_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_permission
    ADD CONSTRAINT strapi_permission_pkey PRIMARY KEY (id);


--
-- TOC entry 3330 (class 2606 OID 26335)
-- Name: strapi_role strapi_role_code_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_role
    ADD CONSTRAINT strapi_role_code_unique UNIQUE (code);


--
-- TOC entry 3332 (class 2606 OID 26333)
-- Name: strapi_role strapi_role_name_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_role
    ADD CONSTRAINT strapi_role_name_unique UNIQUE (name);


--
-- TOC entry 3334 (class 2606 OID 26331)
-- Name: strapi_role strapi_role_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_role
    ADD CONSTRAINT strapi_role_pkey PRIMARY KEY (id);


--
-- TOC entry 3340 (class 2606 OID 26356)
-- Name: strapi_users_roles strapi_users_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_users_roles
    ADD CONSTRAINT strapi_users_roles_pkey PRIMARY KEY (id);


--
-- TOC entry 3326 (class 2606 OID 26305)
-- Name: strapi_webhooks strapi_webhooks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_webhooks
    ADD CONSTRAINT strapi_webhooks_pkey PRIMARY KEY (id);


--
-- TOC entry 3348 (class 2606 OID 26395)
-- Name: upload_file_morph upload_file_morph_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upload_file_morph
    ADD CONSTRAINT upload_file_morph_pkey PRIMARY KEY (id);


--
-- TOC entry 3346 (class 2606 OID 26384)
-- Name: upload_file upload_file_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upload_file
    ADD CONSTRAINT upload_file_pkey PRIMARY KEY (id);


--
-- TOC entry 3350 (class 2606 OID 26406)
-- Name: users-permissions_permission users-permissions_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."users-permissions_permission"
    ADD CONSTRAINT "users-permissions_permission_pkey" PRIMARY KEY (id);


--
-- TOC entry 3352 (class 2606 OID 26417)
-- Name: users-permissions_role users-permissions_role_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."users-permissions_role"
    ADD CONSTRAINT "users-permissions_role_pkey" PRIMARY KEY (id);


--
-- TOC entry 3354 (class 2606 OID 26419)
-- Name: users-permissions_role users-permissions_role_type_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."users-permissions_role"
    ADD CONSTRAINT "users-permissions_role_type_unique" UNIQUE (type);


--
-- TOC entry 3356 (class 2606 OID 26432)
-- Name: users-permissions_user users-permissions_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."users-permissions_user"
    ADD CONSTRAINT "users-permissions_user_pkey" PRIMARY KEY (id);


--
-- TOC entry 3358 (class 2606 OID 26434)
-- Name: users-permissions_user users-permissions_user_username_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."users-permissions_user"
    ADD CONSTRAINT "users-permissions_user_username_unique" UNIQUE (username);


--
-- TOC entry 3378 (class 2606 OID 26578)
-- Name: video_page_fields_components video_page_fields_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.video_page_fields_components
    ADD CONSTRAINT video_page_fields_components_pkey PRIMARY KEY (id);


--
-- TOC entry 3376 (class 2606 OID 26567)
-- Name: video_page_fields video_page_fields_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.video_page_fields
    ADD CONSTRAINT video_page_fields_pkey PRIMARY KEY (id);


--
-- TOC entry 3324 (class 2606 OID 26294)
-- Name: video video_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.video
    ADD CONSTRAINT video_pkey PRIMARY KEY (id);


--
-- TOC entry 3380 (class 2606 OID 26538)
-- Name: gallery_page_fields_s_components gallery_page_fields__id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gallery_page_fields_s_components
    ADD CONSTRAINT gallery_page_fields__id_fk FOREIGN KEY (gallery_page_fields__id) REFERENCES public.gallery_page_fields_s(id) ON DELETE CASCADE;


--
-- TOC entry 3379 (class 2606 OID 26458)
-- Name: main_page_components main_page_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.main_page_components
    ADD CONSTRAINT main_page_id_fk FOREIGN KEY (main_page_id) REFERENCES public.main_page(id) ON DELETE CASCADE;


--
-- TOC entry 3381 (class 2606 OID 26579)
-- Name: video_page_fields_components video_page_field_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.video_page_fields_components
    ADD CONSTRAINT video_page_field_id_fk FOREIGN KEY (video_page_field_id) REFERENCES public.video_page_fields(id) ON DELETE CASCADE;


-- Completed on 2021-12-09 22:50:49 MSK

--
-- PostgreSQL database dump complete
--

