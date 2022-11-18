function treeBreadthFirst(p, q) {
    if (!p || !q) return false;
    if (!p && !q) return true;
    if (p.value !== q.value) return false;
    return (
        treeBreadthFirst(p.left, q.left) && treeBreadthFirst(p.right, q.right)
    );
}
module.exports= {treeBreadthFirst};