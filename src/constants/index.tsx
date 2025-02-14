export const host = "http://127.0.0.1:8000/api/v1";

export const API_URL_login = `${host}/token/`;
export const API_URL_refreshToken = `${host}/token/refresh/`;

export const API_URL_domainInfo = `${host}/recon_domain_info`;
export const API_URL_domainRecords = `${host}/recon_domain_records`;
export const API_URL_subDomain = `${host}/recon_subdomain`;
export const API_URL_allScan = `${host}/recon_complete_scan`;
export const API_URL_getDomain = `${host}/recon_results`;