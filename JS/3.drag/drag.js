/** 
 * 拖动绝对定位元素, 默认此元素相对于 body 定位
 * 
 * 用于元素的 mousedown 事件处理函数
 * 
 * 修改元素 left, top 数值
 * 
 * 做 IE 的兼容
 */
function drag(elementToDrag, event){
    // 拖动时鼠标的初始坐标
    const {clientX: startX, clientY: startY} = event
    
    // 元素初始位置
    const {offsetLeft: originX, offsetTop: originY} = elementToDrag

    if(document.addEventListener){
        // 绑定于捕获阶段，可以通过 cancelBubble 消除掉对其他元素的影响
        document.addEventListener('mousemove', moveHandler, true)
        document.addEventListener('mouseup', upHandler, true)
    }else if(document.attachEvent){
        // IE5-8
        // 通过调用 setCapture 进行事件捕获
        elementToDrag.setCapture()
        elementToDrag.attachEvent('onmousemove', moveHandler) // 没有捕获阶段
        elementToDrag.attachEvent('onmouseup', upHandler)
        // 鼠标捕获的丢失，看作是 mouseup 事件
        elementToDrag.attachEvent('onlosecapture', upHandler)
    }

    cancelBubble(event)

    function moveHandler(e){
        if(!e){
            // IE
            e = window.event
        }
        const {clientX, clientY} = e
        const deltaX = clientX - startX 
        const deltaY = clientY - startY
        elementToDrag.style.left = originX + deltaX + 'px'
        elementToDrag.style.top = originY + deltaY + 'px'

        cancelBubble(e)
    }

    function upHandler(e){
        if(!e){
            // IE
            e = window.event
        }
        if(document.removeEventListener){
            document.removeEventListener('mousemove', moveHandler, true)
            document.removeEventListener('mouseup', upHandler, true)
        }else if(document.detachEvent){
            // IE 5-8
            elementToDrag.detachEvent('onlosecapture', upHandler)
            elementToDrag.detachEvent('onmousemove', moveHandler)
            elementToDrag.detachEvent('onmouseup', upHandler)
            elementToDrag.releaseCapture()
        }

        cancelBubble(e)
    }
}

function cancelBubble(e){
    if(!e){
        return
    }
    if(e.stopPropagation){
        // 标准模型
        e.stopPropagation()
    }else{
        // IE
        e.cancelBubble = true
    }
    if(e.prevenDefault){
        // 标准模型
        e.prevenDefault()
    }else{
        // IE 模型
        e.returnValue = false
    }
}