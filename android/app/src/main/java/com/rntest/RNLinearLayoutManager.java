package com.rntest;

import android.widget.LinearLayout;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

/**
 * (c) Ganita 2017
 */

public class RNLinearLayoutManager extends ViewGroupManager<LinearLayout> {

    @Override
    public String getName() {
        return "RNLinearLayout";
    }

    @Override
    protected LinearLayout createViewInstance(ThemedReactContext reactContext) {
        LinearLayout layout = new LinearLayout(reactContext);
        layout.setOrientation(LinearLayout.VERTICAL);
        return layout;
    }

}
