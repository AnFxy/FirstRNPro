package com.firstrnpro.module

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.firstrnpro.BuildConfig

class SystemConfig(val context: ReactApplicationContext)
    : ReactContextBaseJavaModule() {
    override fun getName(): String {
        return "SystemConfig"
    }

    override fun getConstants(): MutableMap<String, Any>? {
        val constantsMap = mutableMapOf<String, Any>()
        constantsMap["VersionCode"] = BuildConfig.VERSION_CODE
        constantsMap["VersionName"] = BuildConfig.VERSION_NAME
        return constantsMap
    }
}