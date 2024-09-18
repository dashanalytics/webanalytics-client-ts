// Copyright 2024 Jelly Terra
// Use of this source code is governed by the MIT license that can be found in the LICENSE file.

export function uuidGen() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c => (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16))
}

export async function reportAccess(uuid: string, host: string, deployTime: string) {
    await fetch(`${host}/api/v1/reportAccess?uuid=${uuid}&deploy_time=${deployTime}&target=${window.location.href}`)
}