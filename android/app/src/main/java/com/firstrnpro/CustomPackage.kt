package com.firstrnpro

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager
import com.firstrnpro.module.SystemConfig

class CustomPackage : ReactPackage {
    override fun createNativeModules(p0: ReactApplicationContext): MutableList<NativeModule> {
        val modulesList = mutableListOf<NativeModule>()
        modulesList.add(SystemConfig(p0))
        return modulesList
    }

    override fun createViewManagers(p0: ReactApplicationContext):
            List<ViewManager<View, ReactShadowNode<*>>> {
        return emptyList()
    }
}