export const apiBaseUrls = {
    DEV: 'https://vision-api-dev.vercel.app/api',
    LOCAL: 'http://localhost:8000/api',
    PROD: 'https://vision-api-prod.vercel.app/api',
    STAGING: 'https://vision-api-staging.vercel.app/api',
};

export const isLocal = origin.includes('localhost');
export const isDev = origin.includes('-dev');
export const isStaging = origin.includes('-staging');
export const isProd = origin.includes('https://visionstudio.ai') || origin.includes('vision-studio.vercel.app');

export const detectEnv = (): {
    envName: string,
    serverUrl: string,
    siteUrl: string,
} => {

    if (isLocal) {
        return {
            envName: 'LOCAL (DEV)',
            serverUrl: apiBaseUrls.LOCAL,
            siteUrl: 'http://localhost:4000',
        };
    }

    if (isDev) {
        return {
            envName: 'DEV',
            serverUrl: apiBaseUrls.DEV,
            siteUrl: 'https://visionstudio-dev.vercel.app',
        };
    }

    if (isStaging) {
        return {
            envName: 'STAGING',
            serverUrl: apiBaseUrls.STAGING,
            siteUrl: 'https://visionstudio-staging.vercel.app',
        };
    }

    if (isProd || isLocal) {
        return {
            envName: 'PROD',
            serverUrl: apiBaseUrls.PROD,
            siteUrl: 'https://visionstudio-prod.vercel.app',
        };
    }

    return {
        envName: 'PROD',
        serverUrl: apiBaseUrls.PROD,
        siteUrl: 'https://visionstudio-prod.vercel.app',
    };
};