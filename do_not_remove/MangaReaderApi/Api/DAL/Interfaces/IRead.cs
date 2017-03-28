using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Api.DAL.Interfaces
{
    public interface IRead<TEntity>
    {
        TEntity Read(object id);

        object Read(object id, Expression<Func<TEntity, object>> selector);

        TEntity Read(object id, Expression<Func<TEntity, TEntity>> selector);
        
        IEnumerable<TEntity> Read();

        IEnumerable<TEntity> Read(int skipe, int take);

        IEnumerable<TEntity> Read(Expression<Func<TEntity, bool>> predicate);

        IEnumerable<object> Read(Expression<Func<TEntity, bool>> predicate, Expression<Func<TEntity, object>> selector);

        IEnumerable<TEntity> Read(Expression<Func<TEntity, bool>> predicate, Expression<Func<TEntity, TEntity>> selector);

        IEnumerable<TEntity> Read(int skip, int take, Expression<Func<TEntity, bool>> predicate);

        IEnumerable<object> Read(int skip, int take, Expression<Func<TEntity, bool>> predicate, Expression<Func<TEntity, object>> selector);

        IEnumerable<TEntity> Read(int skip, int take, Expression<Func<TEntity, bool>> predicate, Expression<Func<TEntity, TEntity>> selector);

        Task<TEntity> ReadAsync(object id);

        Task<object> ReadAsync(object id, Expression<Func<TEntity, object>> selector);

        Task<TEntity> ReadAsync(object id, Expression<Func<TEntity, TEntity>> selector);

        Task<IEnumerable<TEntity>> ReadAsync();

        Task<IEnumerable<TEntity>> ReadAsync(int skipe, int take);

        Task<IEnumerable<TEntity>> ReadAsync(Expression<Func<TEntity, bool>> predicate);

        Task<IEnumerable<object>> ReadAsync(Expression<Func<TEntity, bool>> predicate, Expression<Func<TEntity, object>> selector);

        Task<IEnumerable<TEntity>> ReadAsync(Expression<Func<TEntity, bool>> predicate, Expression<Func<TEntity, TEntity>> selector);

        Task<IEnumerable<TEntity>> ReadAsync(int skip, int take, Expression<Func<TEntity, bool>> predicate);

        Task<IEnumerable<object>> ReadAsync(int skip, int take, Expression<Func<TEntity, bool>> predicate, Expression<Func<TEntity, object>> selector);

        Task<IEnumerable<TEntity>> ReadAsync(int skip, int take, Expression<Func<TEntity, bool>> predicate, Expression<Func<TEntity, TEntity>> selector);
    }
}